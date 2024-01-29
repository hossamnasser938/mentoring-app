import { ContactUsServie, iocContainer } from '@core/ioc-container';
import { IOC_TYPES } from '@core/ioc-container/types';
import { IAuthMiddleware } from '@core/middleware/auth/auth.interface';
import { Request, Response, Router } from 'express';

const contactUsRouter = Router();

const contactUsService = iocContainer.get<ContactUsServie>(
  IOC_TYPES.ContactUsServie,
);
const authMiddleware = iocContainer.get<IAuthMiddleware>(
  IOC_TYPES.IAuthMiddleware,
);

contactUsRouter.get(
  '/',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor', 'Admin']),
  async (req: Request, res: Response) => {
    try {
      const query: string | undefined = req.query.search as string;
      if (query) {
        const oneContactUS =
          await contactUsService.getOneContactUsByEmailOrPhoneNumber(query);
        return res.json({ data: oneContactUS });
      }

      const contactUss = await contactUsService.getAllContactUss();
      return res.json({ data: contactUss });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
);

contactUsRouter.get(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Mentor', 'Admin']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const contactUs = await contactUsService.getOneContactUs(id);
    res.json({ data: contactUs });
  },
);

contactUsRouter.post('/', async (req: Request, res: Response) => {
  const { name, email, phoneNumber, message, timeToContact, field } = req.body;

  if (timeToContact) {
    const [hour, minute] = timeToContact.split(':').map(Number);
    const contactUs = await contactUsService.createOneContactUs({
      name,
      email,
      phoneNumber,
      message,
      field,
      timeToContact: {
        hour,
        minute,
      },
    });
    res.json({ data: contactUs });
  } else {
    const contactUs = await contactUsService.createOneContactUs({
      name,
      email,
      phoneNumber,
      message,
      field,
    });
    res.json({ data: contactUs });
  }
});

contactUsRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await contactUsService.updateOneContactUs(id, req.body);
  res.json({ success: updated });
});

contactUsRouter.delete(
  '/:id',
  authMiddleware.authentication,
  authMiddleware.authorize(['Admin']),
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = await contactUsService.deleteOneContactUs(id);
    res.json({ success: deleted });
  },
);

export { contactUsRouter };
