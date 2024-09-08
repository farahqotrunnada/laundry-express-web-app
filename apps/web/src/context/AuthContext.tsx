'use client';

import * as React from 'react';

import { User } from '@/types/user';
import axios from '@/lib/axios';
import { isAxiosError } from 'axios';
import { useLocalStorage } from '@uidotdev/usehooks';

interface AuthContextProps {
  user: User | null;
  token: string | null;
  signin: (data: any) => void;
  signout: () => void;
}

const AuthContext = React.createContext<AuthContextProps>({
  user: null,
  token: null,
  signin: () => {},
  signout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useLocalStorage('access_token', null);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const { data } = await axios.get('/auth/profile');
          setUser(data);
        } catch (error) {
          if (isAxiosError(error)) console.error(error.response?.data?.message);
          console.error(error);
        }
      };

      getUser();
    }
  }, [token]);

  const signin = async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data } = await axios.post('/auth/login', { email, password });
      setToken(data.access_token);
    } catch (error) {
      if (isAxiosError(error)) console.error(error.response?.data?.message);
      console.error(error);
    }
  };

  const signout = async () => {
    setToken(null);
  };

  return <AuthContext.Provider value={{ user, token, signin, signout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
