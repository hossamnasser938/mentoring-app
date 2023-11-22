import { AGenericDAO } from '@core/data-layer/generic-dao.abstract';
import { IProjectIdeas } from '@core/entities/projectIdeas.entity';

import {
  ICreateProjectIdeasDTO,
  IUpdateProjectIdeasDTO,
} from './projectIdeas.types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProjectIdeasDAO
  extends AGenericDAO<
    IProjectIdeas,
    ICreateProjectIdeasDTO,
    IUpdateProjectIdeasDTO
  > {}
