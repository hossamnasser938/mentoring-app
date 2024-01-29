import { IContactUs } from '@core/entities/contactUs.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreateContactUsDTO extends IContactUs {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdateContactUsDTO extends Partial<ICreateContactUsDTO> {}
