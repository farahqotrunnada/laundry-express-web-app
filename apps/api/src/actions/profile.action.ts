import ApiError from '@/utils/api.error';
import { User } from '@prisma/client';
import prisma from '@/libs/prisma';

export default class ProfileAction {
  show = async (user_id: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { user_id },
      });
      if (!user) throw new ApiError(401, 'User data not found');

      return user;
    } catch (error) {
      throw error;
    }
  };

  update = async (user_id: string, fullname: string, phone: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: { user_id },
      });
      if (!user) throw new ApiError(401, 'User data not found');

      await prisma.user.update({
        where: { user_id },
        data: { fullname, phone },
      });

      user.fullname = fullname;
      user.phone = phone;

      return user;
    } catch (error) {
      throw error;
    }
  };
}
