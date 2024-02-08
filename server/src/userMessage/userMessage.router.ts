import { iocContainer, UserMessageServie } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { IAuthMiddleware } from '@core/middleware/auth/auth.interface';
import { Request, Response, Router } from 'express';

const userMessageRouter = Router();

const userMessageService = iocContainer.get<UserMessageServie>(
  IOC_TYPES.UserMessageServie,
);
const authMiddleware = iocContainer.get<IAuthMiddleware>(
  IOC_TYPES.IAuthMiddleware,
);

userMessageRouter.get(
  '/',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor', 'Admin']),
  async (req: Request, res: Response) => {
    try {
      const query: string | undefined = req.query.search as string;
      if (query) {
        const userMessages =
          await userMessageService.getOneUserMessageByEmailOrPhoneNumber(query);
        return res.json({ data: userMessages });
      }

      const userMessages = await userMessageService.getAllUserMessages();
      return res.json({ data: userMessages });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
);

userMessageRouter.get(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor', 'Admin']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const userMessage = await userMessageService.getOneUserMessage(id);
    res.json({ data: userMessage });
  },
);

userMessageRouter.post('/', async (req: Request, res: Response) => {
  const { name, email, phoneNumber, message } = req.body;
  const userMessage = await userMessageService.createOneUserMessage({
    name,
    email,
    phoneNumber,
    message,
  });
  res.json({ data: userMessage });
});

userMessageRouter.put(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor', 'Admin']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const {} = req.body;
    const updated = await userMessageService.updateOneUserMessage(id, {});
    res.json({ success: updated });
  },
);

userMessageRouter.delete(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor', 'Admin']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = await userMessageService.deleteOneUserMessage(id);
    res.json({ success: deleted });
  },
);

export { userMessageRouter };
