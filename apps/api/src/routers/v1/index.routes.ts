import AuthRouter from './routes/auth.routes';
import { Router } from 'express';

export default class IndexRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const routes = {
      auth: new AuthRouter(),
    };

    this.router.use('/auth', routes.auth.getRouter());
  }

  getRouter(): Router {
    return this.router;
  }
}
