import { comparePasswords, generateAccessToken, generateHash, generateRefreshToken } from '@/utils/encryption';

import ApiError from '@/utils/api.error';
import EmailAction from '@/actions/email.action';
import { JWT_SECRET } from '@/config';
import prisma from '@/libs/prisma';

export default class AuthAction {
  private emailAction: EmailAction;

  constructor() {
    this.emailAction = new EmailAction();
  }

  login = async (email: string, password: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) throw new ApiError(401, 'Invalid email or password');
      if (!user.password || !user.is_verified) throw new ApiError(401, 'Please verify your email, to login');

      const valid = await comparePasswords(password, user.password);
      if (!valid) throw new ApiError(401, 'Invalid email or password');

      const access_token = generateAccessToken({
        user_id: user.user_id,
        fullname: user.fullname,
        email: user.email,
        avatar_url: user.avatar_url,
        role: user.role,
      });

      const refresh_token = generateRefreshToken({
        user_id: user.user_id,
        email: user.email,
      });

      return { access_token, refresh_token };
    } catch (error) {
      throw error;
    }
  };

  profile = async (user_id: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { user_id },
      });

      if (!user) throw new ApiError(401, 'Invalid token');

      return user;
    } catch (error) {
      throw error;
    }
  };

  register = async (email: string, fullname: string, phone: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (user) throw new ApiError(401, 'Email already exists');

      const created = await prisma.user.create({
        data: {
          email,
          fullname,
          phone,
        },
      });

      await this.emailAction.sendVerificationEmail(created);
    } catch (error) {
      throw error;
    }
  };

  verify = async (user_id: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { user_id },
      });
      if (!user) throw new ApiError(401, 'Invalid token');

      user.is_verified = true;
      await prisma.user.update({
        where: { user_id: user.user_id },
        data: { is_verified: true },
      });

      return user;
    } catch (error) {
      throw error;
    }
  };

  setPassword = async (user_id: string, password: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { user_id },
      });

      if (!user) throw new ApiError(401, 'Invalid token');

      const hashed = await generateHash(password);
      await prisma.user.update({
        where: { user_id: user.user_id },
        data: { password: hashed },
      });

      const access_token = generateAccessToken({
        user_id: user.user_id,
        fullname: user.fullname,
        email: user.email,
        avatar_url: user.avatar_url,
        role: user.role,
      });

      const refresh_token = generateRefreshToken({
        user_id: user.user_id,
        email: user.email,
      });

      return { access_token, refresh_token };
    } catch (error) {
      throw error;
    }
  };

  refresh = async (user_id: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { user_id },
      });

      if (!user) throw new ApiError(401, 'Invalid token');

      const access_token = generateAccessToken({
        user_id: user.user_id,
        fullname: user.fullname,
        email: user.email,
        avatar_url: user.avatar_url,
        role: user.role,
      });

      const refresh_token = generateRefreshToken({
        user_id: user.user_id,
        email: user.email,
      });

      return { access_token, refresh_token };
    } catch (error) {
      throw error;
    }
  };
}
