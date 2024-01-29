import { BaseEntity } from './base.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHelpMe extends BaseEntity {
  name: string;
  email?: string;
  phoneNumber: string;
  responded?: boolean;
  department?: string;
  collage?: string;
  message: string;
  timeToContact?: ITimeToContact;
}

interface ITimeToContact {
  hour: number;
  minute: number;
}
