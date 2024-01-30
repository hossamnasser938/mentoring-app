import { BaseEntity } from './base.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IContactUs extends BaseEntity {
  name: string;
  email: string;
  message: string;
  responded?: boolean;
}
