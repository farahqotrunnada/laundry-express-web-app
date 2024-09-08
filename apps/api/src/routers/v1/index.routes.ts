import { Router } from 'express';

export default class IndexRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    //
  }

  getRouter(): Router {
    return this.router;
  }
}
