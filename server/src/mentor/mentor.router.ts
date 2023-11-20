import { iocContainer, MentorServie } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { IAuthMiddleware } from '@core/middleware/auth/auth.interface';
import { Request, Response, Router } from 'express';

const mentorRouter = Router();

const mentorService = iocContainer.get<MentorServie>(IOC_TYPES.MentorServie);
const authMiddleware = iocContainer.get<IAuthMiddleware>(
  IOC_TYPES.IAuthMiddleware,
);
mentorRouter.get(
  '/',

  async (req: Request, res: Response) => {
    const mentors = await mentorService.getAllMentors();
    return res.json({ data: mentors });
  },
);

mentorRouter.get(
  '/:id',

  async (req: Request, res: Response) => {
    const { id } = req.params;
    const mentor = await mentorService.getOneMentor(id);
    res.json({ data: mentor });
  },
);

mentorRouter.post(
  '/',
  authMiddleware.authentication,
  authMiddleware.authorize(['Admin']),
  async (req: Request, res: Response) => {
    const { username, title, description, youtubeLink, cv, profilePicture } =
      req.body;

    if (!req.userDecodedData?.id) {
      return res.json({ error: 'User is not Authorized' });
    }

    const mentor = await mentorService.createOneMentor({
      username,
      title,
      description,
      youtubeLink,
      cv,
      profilePicture,
      createdAdmin: req.userDecodedData?.id,
      isCreatedByAdmin: false,
    });
    res.json({ data: mentor });
  },
);

mentorRouter.put(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const fieldsToUpdate = req.body;

    const authoriaedMentor = req.userDecodedData?.id;
    if (!authoriaedMentor) {
      return res.json({ error: 'User is not Authorized' });
    }
    const updated = await mentorService.updateOneMentor(
      id,
      fieldsToUpdate,
      authoriaedMentor,
    );
    res.json({ success: updated });
  },
);

mentorRouter.delete(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Admin']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = await mentorService.deleteOneMentor(id);
    res.json({ success: deleted });
  },
);

export { mentorRouter };
