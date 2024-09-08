import { Router } from 'express';
import SampleController from '@/controllers/sample.controller';

export default class SampleRouter {
  private router: Router;
  private sampleController: SampleController;

  constructor() {
    this.sampleController = new SampleController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.sampleController.getSampleData);
    this.router.post('/', this.sampleController.createSampleData);
    this.router.get('/:id', this.sampleController.getSampleDataById);
  }

  getRouter(): Router {
    return this.router;
  }
}
