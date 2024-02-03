import { BaseEntity } from './base.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserMessage extends BaseEntity {
  name: string;
  email?: string;
  phoneNumber?: string;
  responded?: boolean;

  message: string;
}
