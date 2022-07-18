import { Router } from 'express';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { DeleteUserController } from '../controllers/users/DeleteUserController';
import { GetAllUserController } from '../controllers/users/GetAllUserController';
import { GetUserController } from '../controllers/users/GetUserController';
import { UpdateUserController } from '../controllers/users/UpdateUserController';
import { AuthenticateToken } from '../middlewares/AuthMiddlewares';

const router = Router();

router.post('/users', new CreateUserController().handle);

router.get('/users', AuthenticateToken, new GetAllUserController().handle);
router.get('/users/:id', AuthenticateToken, new GetUserController().handle);
router.put('/users/:id', AuthenticateToken, new UpdateUserController().handle);
router.delete('/users/:id', new DeleteUserController().handle);

export { router };