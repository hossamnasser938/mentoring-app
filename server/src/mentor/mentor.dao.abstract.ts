import { AGenericDAO } from '@core/data-layer/generic-dao.abstract';
import { IMentor } from '@core/entities/mentor.entity';

import { ICreateMentorDTO, IUpdateMentorDTO } from './mentor.types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IMentorDAO
  extends AGenericDAO<IMentor, ICreateMentorDTO, IUpdateMentorDTO> {}