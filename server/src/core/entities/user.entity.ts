import { BaseEntity } from './base.entity';

export type UserRole = 'User' | 'Admin' | 'Mentor';
export interface IUser extends BaseEntity {
  username: string;
  email: string;
  password: string;
  role?: UserRole;
}
