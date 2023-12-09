import { iocContainer, ProjectIdeaServie } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { IAuthMiddleware } from '@core/middleware/auth/auth.interface';
import { Request, Response, Router } from 'express';

const projectIdeaRouter = Router();

const projectIdeaService = iocContainer.get<ProjectIdeaServie>(
  IOC_TYPES.ProjectIdeaServie,
);
const authMiddleware = iocContainer.get<IAuthMiddleware>(
  IOC_TYPES.IAuthMiddleware,
);

projectIdeaRouter.get('/', async (req: Request, res: Response) => {
  const projectIdeas = await projectIdeaService.getAllProjectIdeas();
  return res.json({ data: projectIdeas });
});

projectIdeaRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const projectIdea = await projectIdeaService.getOneProjectIdeas(id);
  res.json({ data: projectIdea });
});

projectIdeaRouter.post(
  '/',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor']),
  async (req: Request, res: Response) => {
    const { name, description, youtubeLink } = req.body;
    const createdMentor = req.userDecodedData?.id;
    if (!createdMentor) {
      throw new Error('Not authorized user');
    }

    const projectIdea = await projectIdeaService.createOneProjectIdea({
      name,
      description,
      youtubeLink,
      createdMentor,
    });
    res.json({ data: projectIdea });
  },
);

projectIdeaRouter.put(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const createdMentor = req.userDecodedData?.id;
    if (!createdMentor) {
      throw new Error('Not authorized user');
    }
    const updated = await projectIdeaService.updateOneProjectIdea(
      id,
      req.body,
      createdMentor,
    );
    res.json({ success: updated });
  },
);

projectIdeaRouter.delete(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const createdMentor = req.userDecodedData?.id;
    if (!createdMentor) {
      throw new Error('Not authorized user');
    }
    const deleted = await projectIdeaService.deleteOneProjectIdea(
      id,
      createdMentor,
    );
    res.json({ success: deleted });
  },
);

export { projectIdeaRouter };
