import { comparePasswords, generateAccessToken, generateHash, generateRefreshToken } from '@/utils/encryption';

import ApiError from '@/utils/api.error';
import EmailAction from '@/actions/email.action';
import prisma from '@/libs/prisma';

export default class AuthAction {
  private emailAction: EmailAction;

  constructor() {
    this.emailAction = new EmailAction();
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new ApiError(401, 'Invalid email or password');
    if (!user.password || !user.is_verified) throw new ApiError(401, 'Please verify your email, to login');

    const valid = await comparePasswords(password, user.password);
    if (!valid) throw new ApiError(401, 'Invalid email or password');

    const access_token = generateAccessToken(user);
    const refresh_token = generateRefreshToken(user);

    return { access_token, refresh_token };
  }

  async register(email: string, fullname: string, phone: string) {
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
  }

  async verify(user_id: string) {
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
  }

  async setPassword(user_id: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { user_id },
    });

    if (!user) throw new ApiError(401, 'Invalid token');

    user.password = await generateHash(password);
    await prisma.user.update({
      where: { user_id: user.user_id },
      data: { password },
    });

    return user;
  }
}
