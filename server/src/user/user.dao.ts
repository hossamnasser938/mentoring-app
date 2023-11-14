import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  IUserDocument,
  UserModel,
} from '@core/data-layer/mongo-models/user.model';
import { IUser } from '@core/entities/user.entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';
import { HydratedDocument } from 'mongoose';

import { IUserDAO } from './user.dao.abstract';
import { ICreateUserDTO, IUpdateUserDTO } from './user.types';

@injectable()
export class UserDAO
  extends MongoGenericDAO<IUser, IUserDocument, ICreateUserDTO, IUpdateUserDTO>
  implements IUserDAO
{
  constructor(
    @inject(IOC_TYPES.UserModel) private readonly userModel: UserModel,
  ) {
    super(userModel);
  }

  getUserByEmail(email: string): Promise<HydratedDocument<IUser> | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
