import { IUser, UserRole } from '@core/entities/user.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreateUserDTO extends IUser {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdateUserDTO extends Partial<IUser> {}

export interface AuthPayloadDTO extends Partial<IUser> {
  email: string;
  role: UserRole;
  id: string;
}
export interface ILoginUserDTO extends Partial<IUser> {
  email: string;
  password: string;
}
