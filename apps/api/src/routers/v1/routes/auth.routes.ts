import AuthController from '@/controllers/auth.controller';
import { Router } from 'express';

export default class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/login', this.authController.login);
    this.router.post('/register', this.authController.register);
    this.router.post('/verify', this.authController.verify);
  }

  getRouter(): Router {
    return this.router;
  }
}
