import * as yup from 'yup';

import { NextFunction, Request, Response } from 'express';

import ApiError from '@/utils/api.error';
import { JWT_SECRET } from '@/utils/constant';
import { verify } from 'jsonwebtoken';

export class Authenticate {
  async header(req: Request, res: Response, next: NextFunction) {
    try {
      const authorization = req.headers.authorization;
      if (!authorization) throw new ApiError(401, 'Unauthorized');

      const token = authorization.split(' ')[1];
      const payload = verify(token, JWT_SECRET as string);
      if (!payload) throw new ApiError(401, 'Unauthorized');

      req.user = payload;

      next();
    } catch (error) {
      next(error);
    }
  }

  async cookie(req: Request, res: Response, next: NextFunction) {
    try {
      const { refresh_token } = req.cookies;
      const payload = verify(refresh_token, JWT_SECRET as string);
      if (!payload) throw new ApiError(401, 'Unauthorized');

      req.user = payload;
      next();
    } catch (error) {
      next(error);
    }
  }

  async query(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = await yup
        .object({
          token: yup.string().required(),
        })
        .validate(req.query);

      const payload = verify(token, JWT_SECRET as string);
      if (!payload) throw new ApiError(401, 'Unauthorized');

      req.user = payload;
      next();
    } catch (error) {
      next(error);
    }
  }
}
