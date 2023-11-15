import { IUser, UserRole } from '@core/entities/user.entity';
import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreateUserDTO extends IUser {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdateUserDTO extends Partial<IUser> {}

export interface LoginPayload extends Partial<IUser> {
  email: string;
  role: UserRole;
  id: mongoose.Types.ObjectId;
}
export interface ILoginUserDTO extends Partial<IUser> {
  email: string;
  password: string;
}
