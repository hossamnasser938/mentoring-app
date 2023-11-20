import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  IUserDocument,
  UserModel,
} from '@core/data-layer/mongo-models/user.model';
import { IUser } from '@core/entities/user.entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

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

  async getUserByEmail(email: string): Promise<IUser | null> {
    return await this.userModel.findOne({ email }).exec();
  }
  async getUserByName(username: string): Promise<IUser | null> {
    const mentor = await this.userModel.findOne({ username }).exec();
    return mentor;
  }
  async updateUserName(id: string, username: string): Promise<boolean> {
    const result = await this.userModel.updateOne({ _id: id }, { username });
    return result.matchedCount === 1;
  }
}
