import { iocContainer } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { Request, Response, Router } from 'express';

import { UserService } from './user.service';

const userRouter = Router();

const userService = iocContainer.get<UserService>(IOC_TYPES.UserService);

userRouter.post('/signup-user', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const user = await userService.signup({
    username,
    email,
    password,
    role: 'User',
  });
  res.json({ message: 'Registration is done', data: user });
});

userRouter.post('/login-user', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const defaultRole = ['User', 'Admin'];
  const accessToken = await userService.login({ email, password }, defaultRole);
  res.json({ message: 'Done', accessToken });
});
userRouter.post('/signup-mentor', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  try {
    const mentor = await userService.signup({
      username,
      email,
      password,
      role: 'Mentor',
    });

    const confirmMentor = await userService.confirmMentorSignUp(username);
    res.json({
      message: 'Registration is done',
      confirmMentor: confirmMentor,
      mentor,
    });
  } catch (error) {
    console.log(error);
  }
});

userRouter.post('/login-mentor', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const defaultRole = ['Mentor'];
  try {
    const accessToken = await userService.login(
      { email, password },
      defaultRole,
    );
    res.json({ message: 'Done', accessToken });
  } catch (error) {
    console.log(error);
  }
});

export { userRouter };
