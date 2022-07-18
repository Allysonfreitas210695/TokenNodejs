import { Router } from 'express';
import { LoginController } from '../controllers/login/LoginController';

const routerToken = Router();

routerToken.post('/login', new LoginController().handle);

export { routerToken };