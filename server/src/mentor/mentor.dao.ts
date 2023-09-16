import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  IMentorDocument,
  MentorModel,
} from '@core/data-layer/mongo-models/mentor.model';
import { IMentor } from '@core/entities/mentor.entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IMentorDAO } from './mentor.dao.abstract';
import { ICreateMentorDTO, IUpdateMentorDTO } from './mentor.types';

@injectable()
export class MentorDAO
  extends MongoGenericDAO<
    IMentor,
    IMentorDocument,
    ICreateMentorDTO,
    IUpdateMentorDTO
  >
  implements IMentorDAO
{
  constructor(@inject(IOC_TYPES.MentorModel) mentorModel: MentorModel) {
    super(mentorModel);
  }
}
