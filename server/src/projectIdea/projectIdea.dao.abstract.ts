import { AGenericDAO } from '@core/data-layer/generic-dao.abstract';
import { IProjectIdea } from '@core/entities/projectIdea.entity';

import {
  ICreateProjectIdeaDTO,
  IUpdateProjectIdeaDTO,
} from './projectIdea.types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProjectIdeaDAO
  extends AGenericDAO<
    IProjectIdea,
    ICreateProjectIdeaDTO,
    IUpdateProjectIdeaDTO
  > {}
