import { Router } from 'express';
import SampleRouter from '@/routers/v1/routes/sample.routes';

export default class IndexRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const routes = {
      sample: new SampleRouter(),
    };

    this.router.use('/sample', routes.sample.getRouter());
  }

  getRouter(): Router {
    return this.router;
  }
}
