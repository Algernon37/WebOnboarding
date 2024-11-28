import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post('register')
  async registerUser(@Body() data: { uid: string; email: string }) {
    if (!data.uid || !data.email) {
      throw new Error('Email and UID are required');
    }
    return this.userService.createUser(data);
  }

  @Post('check')
  async checkUser(@Body() data: { uid: string; email: string }) {
    return this.userService.checkUser(data);
  }
}