import { iocContainer, ProjectIdeasServie } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { IAuthMiddleware } from '@core/middleware/auth/auth.interface';
import { Request, Response, Router } from 'express';

const projectIdeasRouter = Router();

const projectIdeasService = iocContainer.get<ProjectIdeasServie>(
  IOC_TYPES.ProjectIdeasServie,
);
const authMiddleware = iocContainer.get<IAuthMiddleware>(
  IOC_TYPES.IAuthMiddleware,
);

projectIdeasRouter.get(
  '/',
  authMiddleware.authentication,
  authMiddleware.authorize(['Admin']),
  async (req: Request, res: Response) => {
    const projectIdeass = await projectIdeasService.getAllProjectIdeass();
    return res.json({ data: projectIdeass });
  },
);

projectIdeasRouter.get(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Admin']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const projectIdeas = await projectIdeasService.getOneProjectIdeas(id);
    res.json({ data: projectIdeas });
  },
);

projectIdeasRouter.post(
  '/',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor']),
  async (req: Request, res: Response) => {
    const { name, description, youtubeLink } = req.body;
    const createdMentor = req.userDecodedData?.id;
    if (!createdMentor) {
      throw new Error('Not authorized user');
    }

    const projectIdeas = await projectIdeasService.createOneProjectIdeas({
      name,
      description,
      youtubeLink,
      createdMentor,
    });
    res.json({ data: projectIdeas });
  },
);

projectIdeasRouter.put(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const createdMentor = req.userDecodedData?.id;
    if (!createdMentor) {
      throw new Error('Not authorized user');
    }
    const updated = await projectIdeasService.updateOneProjectIdeas(
      id,
      req.body,
      createdMentor,
    );
    res.json({ success: updated });
  },
);

projectIdeasRouter.delete(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const createdMentor = req.userDecodedData?.id;
    if (!createdMentor) {
      throw new Error('Not authorized user');
    }
    const deleted = await projectIdeasService.deleteOneProjectIdeas(
      id,
      createdMentor,
    );
    res.json({ success: deleted });
  },
);

export { projectIdeasRouter };
