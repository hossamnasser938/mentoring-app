import { Container } from 'inversify';

import { IOC_TYPES } from './types';

export const iocContainer = new Container();

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

export { UserDAO, UserService };

/* utilities deps */
import { BcryptPassword } from '@core/Utilities/passwordHashing/bcryptPassword';
import { GenericTokenService } from '@core/Utilities/token/generic.token.service';
import { TokenService } from '@core/Utilities/token/token.service';
import { ITokenService } from '@core/Utilities/token/token.service.interface';
import { LoginPayload } from '@user/user.types';

iocContainer.bind<BcryptPassword>(IOC_TYPES.BcryptPassword).to(BcryptPassword);
iocContainer.bind<ITokenService>(IOC_TYPES.ITokenService).to(TokenService);

iocContainer
  .bind<GenericTokenService<LoginPayload>>(IOC_TYPES.GenericTokenService)
  .to(GenericTokenService);
