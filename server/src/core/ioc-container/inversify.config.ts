import { Container } from 'inversify';

import { IOC_TYPES } from './types';

export const iocContainer = new Container();

/* utilities deps */
import { BcryptPassword } from '@core/utili/passwordHashing/bcryptPassword';
import { IPasswordHasher } from '@core/utili/passwordHashing/hashPassword.abstract';
import { TokenService } from '@core/utili/token/token.service';
import { ITokenService } from '@core/utili/token/token.service.interface';
import { ICreateMentorDTO } from '@mentor/mentor.types';
import { AuthPayloadDTO } from '@user/user.types';

iocContainer
  .bind<IPasswordHasher>(IOC_TYPES.IPasswordHasher)
  .to(BcryptPassword);

iocContainer
  .bind<ITokenService<AuthPayloadDTO>>(IOC_TYPES.ITokenService)
  .to(TokenService);

iocContainer
  .bind<ITokenService<ICreateMentorDTO>>(IOC_TYPES.ITokenMentor)
  .to(TokenService);
/* mentor deps */
import {
  MentorModel,
  mentorModel,
} from '@core/data-layer/mongo-models/mentor.model';
import { MentorDAO } from '@mentor/mentor.dao';
import { IMentorDAO } from '@mentor/mentor.dao.abstract';
import { MentorServie } from '@mentor/mentor.service';

iocContainer.bind<IMentorDAO>(IOC_TYPES.IMentorDAO).to(MentorDAO);
iocContainer.bind<MentorServie>(IOC_TYPES.MentorServie).to(MentorServie);
iocContainer
  .bind<MentorModel>(IOC_TYPES.MentorModel)
  .toConstantValue(mentorModel);

export { MentorDAO, MentorServie };

/* user deps */

import { UserModel, userModel } from '@core/data-layer/mongo-models/user.model';
import { UserDAO } from '@user/user.dao';
import { IUserDAO } from '@user/user.dao.abstract';
import { UserService } from '@user/user.service';

iocContainer.bind<IUserDAO>(IOC_TYPES.IUserDAO).to(UserDAO);
iocContainer.bind<UserService>(IOC_TYPES.UserService).to(UserService);
iocContainer.bind<UserModel>(IOC_TYPES.UserModel).toConstantValue(userModel);

/* middleware deps */
import { AuthMiddleware } from '@core/middleware/auth/auth';

import { IAuthMiddleware } from './../middleware/auth/auth.interface';

iocContainer
  .bind<IAuthMiddleware>(IOC_TYPES.IAuthMiddleware)
  .to(AuthMiddleware);

/* projectIdeas deps */

import {
  ProjectIdeaModel,
  projectIdeaModel,
} from '@core/data-layer/mongo-models/projectIdea.model';
import { ProjectIdeaDAO } from '@projectIdea/projectIdea.dao';
import { IProjectIdeaDAO } from '@projectIdea/projectIdea.dao.abstract';
import { ProjectIdeaServie } from '@projectIdea/projectIdea.service';

iocContainer
  .bind<IProjectIdeaDAO>(IOC_TYPES.IProjectIdeaDAO)
  .to(ProjectIdeaDAO);
iocContainer
  .bind<ProjectIdeaServie>(IOC_TYPES.ProjectIdeaServie)
  .to(ProjectIdeaServie);
iocContainer
  .bind<ProjectIdeaModel>(IOC_TYPES.ProjectIdeaModel)
  .toConstantValue(projectIdeaModel);

export { ProjectIdeaDAO, ProjectIdeaServie };

/* contactUs deps */
import { ContactUsDAO } from '@contactUs/contactUs.dao';
import { IContactUsDAO } from '@contactUs/contactUs.dao.abstract';
import { ContactUsServie } from '@contactUs/contactUs.service';
import {
  ContactUsModel,
  contactUsModel,
} from '@core/data-layer/mongo-models/contactUs.model';

iocContainer.bind<IContactUsDAO>(IOC_TYPES.IContactUsDAO).to(ContactUsDAO);
iocContainer
  .bind<ContactUsServie>(IOC_TYPES.ContactUsServie)
  .to(ContactUsServie);
iocContainer
  .bind<ContactUsModel>(IOC_TYPES.ContactUsModel)
  .toConstantValue(contactUsModel);

export { ContactUsDAO, ContactUsServie };
