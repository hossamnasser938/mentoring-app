import { iocContainer } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { Request, Response, Router } from 'express';

import { UserService } from './user.service';

const userRouter = Router();

const userService = iocContainer.get<UserService>(IOC_TYPES.UserService);

userRouter.post('/signup', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const user = await userService.signup({ username, email, password });
  res.json({ message: 'Regestraion is done', data: user });
});

userRouter.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const accessToken = await userService.login(email, password);
  res.json({ message: 'Done', accessToken });
});
export { userRouter };
