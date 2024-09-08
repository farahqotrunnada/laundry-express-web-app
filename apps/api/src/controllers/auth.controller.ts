import * as yup from 'yup';

import { NextFunction, Request, Response } from 'express';

import ApiError from '@/utils/api.error';
import ApiResponse from '@/utils/api.response';
import AuthAction from '@/actions/auth.action';
import { EmailTokenPayload } from '@/type/jwt';
import { FRONTEND_URL } from '@/utils/constant';

export default class AuthController {
  private authAction: AuthAction;

  constructor() {
    this.authAction = new AuthAction();
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = await yup
        .object({
          email: yup.string().email().required(),
          password: yup.string().required(),
        })
        .validate(req.body);

      const { access_token, refresh_token } = await this.authAction.login(email, password);

      res.cookie('refresh_token', refresh_token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      });

      return res.status(200).json(
        new ApiResponse('Login successful', {
          access_token,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, fullname, phone } = await yup
        .object({
          email: yup.string().email().required(),
          fullname: yup.string().required(),
          phone: yup.string().required(),
        })
        .validate(req.body);

      await this.authAction.register(email, fullname, phone);

      return res.status(201).json(
        new ApiResponse('Register successful, please check your email to verify your account', {
          email,
          fullname,
          phone,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  async verify(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.user as EmailTokenPayload;
      if (!user) throw new ApiError(401, 'Unauthorized');

      const { user_id } = user;
      await this.authAction.verify(user_id);

      const { email_token } = await yup
        .object({
          email_token: yup.string().required(),
        })
        .validate(req.query);

      const url = new URL(FRONTEND_URL);
      url.pathname = '/set-password';
      url.searchParams.set('token', email_token);

      return res.redirect(url.toString());
    } catch (error) {
      next(error);
    }
  }

  async setPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { password } = await yup
        .object({
          password: yup.string().required(),
        })
        .validate(req.body);

      const { user_id } = req.user as EmailTokenPayload;
      await this.authAction.setPassword(user_id, password);

      return res.status(200).json(new ApiResponse('Password set successfully'));
    } catch (error) {
      next(error);
    }
  }
}
