import { HelpMeServie, iocContainer } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { IAuthMiddleware } from '@core/middleware/auth/auth.interface';
import { Request, Response, Router } from 'express';

const helpMeRouter = Router();

const helpMeService = iocContainer.get<HelpMeServie>(IOC_TYPES.HelpMeServie);
const authMiddleware = iocContainer.get<IAuthMiddleware>(
  IOC_TYPES.IAuthMiddleware,
);
helpMeRouter.get(
  '/',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor', 'Admin']),
  async (req: Request, res: Response) => {
    try {
      const query: string | undefined = req.query.search as string;
      if (query) {
        const oneHelpMes = await helpMeService.getOneHelpMeByEmailOrPhoneNumber(
          query,
        );
        return res.json({ data: oneHelpMes });
      }
      const helpMes = await helpMeService.getAllHelpMes();
      return res.json({ data: helpMes });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
);

helpMeRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const helpMe = await helpMeService.getOneHelpMe(id);
  res.json({ data: helpMe });
});

helpMeRouter.post('/', async (req: Request, res: Response) => {
  const {
    name,
    email,
    phoneNumber,
    message,
    timeToContact,
    collage,
    department,
  } = req.body;

  if (timeToContact) {
    const [hour, minute] = timeToContact.split(':').map(Number);
    const helpMe = await helpMeService.createOneHelpMe({
      name,
      email,
      phoneNumber,
      message,
      collage,
      department,
      timeToContact: {
        hour,
        minute,
      },
    });
    res.json({ data: helpMe });
  } else {
    const helpMe = await helpMeService.createOneHelpMe({
      name,
      email,
      phoneNumber,
      message,
      collage,
      department,
    });
    res.json({ data: helpMe });
  }
});

helpMeRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const {} = req.body;
  const updated = await helpMeService.updateOneHelpMe(id, {});
  res.json({ success: updated });
});

helpMeRouter.delete(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Admin']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = await helpMeService.deleteOneHelpMe(id);
    res.json({ success: deleted });
  },
);

export { helpMeRouter };
