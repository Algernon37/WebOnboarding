import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Error fetching users');
    }
  }

  async createUser(data: { uid: string; email: string }) {
    if (!data.email || !data.uid) {
      throw new Error('Email and UID are required');
    }

    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email },
      });

      if (!existingUser) {
        return await this.prisma.user.create({
          data: {
            uid: data.uid,
            email: data.email,
          },
        });
      }
      return existingUser; 
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Error creating user');
    }
  }

  async checkUser(data: { uid: string; email: string }) {
    if (!data.email) {
      throw new Error('Email is required');
    }

    try {
      return await this.prisma.user.findUnique({
        where: { email: data.email },
      });
    } catch (error) {
      console.error('Error checking user:', error);
      throw new Error('Error checking user');
    }
  }
}

