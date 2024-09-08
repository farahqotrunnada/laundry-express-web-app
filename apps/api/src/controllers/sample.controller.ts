import { NextFunction, Request, Response } from 'express';

import ApiError from '@/utils/api.error';
import ApiResponse from '@/utils/api.response';
import prisma from '@/prisma';

export default class SampleController {
  async getSampleData(req: Request, res: Response, next: NextFunction) {
    try {
      const samples = await prisma.sample.findMany();
      return res.status(200).json(new ApiResponse('Sample data', samples));
    } catch (error) {
      next(error);
    }
  }

  async getSampleDataById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const sample = await prisma.sample.findUnique({
        where: { id: Number(id) },
      });

      if (!sample) return res.status(404).send(new ApiError(404, 'Sample not found'));

      return res.status(200).send(new ApiResponse('Sample data', sample));
    } catch (error) {
      next(error);
    }
  }

  async createSampleData(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, code } = req.body;

      const created = await prisma.sample.create({
        data: { name, code },
      });

      return res.status(201).send(created);
    } catch (error) {
      next(error);
    }
  }
}
