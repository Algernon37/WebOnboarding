import { useState } from 'react';
import { IUser } from '../interfaces/Tasksinterfaces';
import axios from 'axios';
import { auth, analytics, logEvent, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase/firebaseConfig';

const useMatchAesthetic = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const authenticateUser = async (action: 'signUp' | 'signIn') => {
    try {
      const result = action === 'signUp'
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);

      const user = result.user;
      setUser({ uid: user.uid, email: user.email });
      setError(null);

      logEvent(analytics, 'sign_up', {
        method: 'email_password',
        user_id: user.uid,
        email: user.email,
      });

      await axios.post(
        action === 'signUp'
          ? 'http://localhost:3000/users/register'
          : 'http://localhost:3000/users/check',
        {
          email: user.email, 
          uid: user.uid,     
        },
        {
          headers: {
            Authorization: `Bearer ${await user.getIdToken()}`,
          },
        },
      );
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return {
    user,
    email,
    password,
    error,
    handleSignUp: () => authenticateUser('signUp'),
    handleSignIn: () => authenticateUser('signIn'),
    handleInputChange,
  };
};

export default useMatchAesthetic;