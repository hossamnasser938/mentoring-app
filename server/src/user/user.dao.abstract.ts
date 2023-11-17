import { AGenericDAO } from '@core/data-layer/generic-dao.abstract';
import { IUser } from '@core/entities/user.entity';

import { ICreateUserDTO, IUpdateUserDTO } from './user.types';

export interface IUserDAO
  extends AGenericDAO<IUser, ICreateUserDTO, IUpdateUserDTO> {
  getUserByEmail(email: string): Promise<IUser | null>;
}
