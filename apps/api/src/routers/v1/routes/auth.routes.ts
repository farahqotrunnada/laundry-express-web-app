import AuthController from '@/controllers/auth.controller';
import { AuthMiddleware } from '@/middlewares/authenticate';
import ProfileController from '@/controllers/profile.controller';
import { Router } from 'express';

export default class AuthRouter {
  private router: Router;
  private authController: AuthController;
  private profileController: ProfileController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();

    this.authController = new AuthController();
    this.profileController = new ProfileController();

    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/login', this.authController.login);
    this.router.post('/register', this.authController.register);
    this.router.get('/verify', this.authMiddleware.query, this.authController.verify);
    this.router.post('/set-password', this.authMiddleware.body, this.authController.setPassword);
    this.router.post('/logout', this.authController.logout);
    this.router.post('/refresh', this.authMiddleware.cookie, this.authController.refresh);

    this.router.get('/profile', this.authMiddleware.header, this.profileController.show);
    this.router.put('/profile', this.authMiddleware.header, this.profileController.update);
  }

  getRouter(): Router {
    return this.router;
  }
}
