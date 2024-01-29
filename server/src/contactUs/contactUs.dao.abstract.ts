import { AGenericDAO } from '@core/data-layer/generic-dao.abstract';
import { IContactUs } from '@core/entities/contactUs.entity';

import { ICreateContactUsDTO, IUpdateContactUsDTO } from './contactUs.types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IContactUsDAO
  extends AGenericDAO<IContactUs, ICreateContactUsDTO, IUpdateContactUsDTO> {
  getContactUsByEmailOrPhoneNumber(query: string): Promise<IContactUs | null>;
}
