import {
  MentorModel,
  mentorModel,
} from '@core/data-layer/mongo-models/mentor.model';
import { MentorDAO } from '@mentor/mentor.dao';
import { IMentorDAO } from '@mentor/mentor.dao.abstract';
import { MentorServie } from '@mentor/mentor.service';
import { Container } from 'inversify';

import { IOC_TYPES } from './types';

const iocContainer = new Container();

/* mentor deps */
iocContainer.bind<IMentorDAO>(IOC_TYPES.IMentorDAO).to(MentorDAO);
iocContainer.bind<MentorServie>(IOC_TYPES.MentorServie).to(MentorServie);
iocContainer
  .bind<MentorModel>(IOC_TYPES.MentorModel)
  .toConstantValue(mentorModel);

export { iocContainer, MentorDAO, MentorServie };
