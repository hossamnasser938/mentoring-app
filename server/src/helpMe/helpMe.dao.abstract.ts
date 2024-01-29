import { AGenericDAO } from '@core/data-layer/generic-dao.abstract';
import { IHelpMe } from '@core/entities/helpMe.entity';

import { ICreateHelpMeDTO, IUpdateHelpMeDTO } from './helpMe.types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHelpMeDAO
  extends AGenericDAO<IHelpMe, ICreateHelpMeDTO, IUpdateHelpMeDTO> {
  getContactUsByEmailOrPhoneNumber(query: string): Promise<IHelpMe | null>;
}
