import { iocContainer, MentorServie } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { AuthMiddleware } from '@core/middleware/auth/auth';
import { Request, Response, Router } from 'express';

import { endPoints } from './mentor.endPoints';

const mentorRouter = Router();

const mentorService = iocContainer.get<MentorServie>(IOC_TYPES.MentorServie);
const authMiddleware = iocContainer.get<AuthMiddleware>(
  IOC_TYPES.AuthMiddleware,
);
mentorRouter.get(
  '/',
  authMiddleware.authantication,
  async (req: Request, res: Response) => {
    try {
      await authMiddleware.authorize(endPoints.get);
      const mentors = await mentorService.getAllMentors();
      return res.json({ data: mentors });
    } catch (err) {
      res.json({ message: 'User is not authorized' });
    }
  },
);

mentorRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const mentor = await mentorService.getOneMentor(id);
  res.json({ data: mentor });
});

mentorRouter.post('/', async (req: Request, res: Response) => {
  const { name, title, description } = req.body;
  const mentor = await mentorService.createOneMentor({
    name,
    title,
    description,
  });
  res.json({ data: mentor });
});

mentorRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, title, description } = req.body;
  const updated = await mentorService.updateOneMentor(id, {
    name,
    title,
    description,
  });
  res.json({ success: updated });
});

mentorRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await mentorService.deleteOneMentor(id);
  res.json({ success: deleted });
});

export { mentorRouter };
