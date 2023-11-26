import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  IProjectIdeasDocument,
  ProjectIdeasModel,
} from '@core/data-layer/mongo-models/projectIdeas.model';
import { IProjectIdeas } from '@core/entities/projectIdeas.entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IProjectIdeasDAO } from './projectIdeas.dao.abstract';
import {
  ICreateProjectIdeasDTO,
  IUpdateProjectIdeasDTO,
} from './projectIdeas.types';

@injectable()
export class ProjectIdeasDAO
  extends MongoGenericDAO<
    IProjectIdeas,
    IProjectIdeasDocument,
    ICreateProjectIdeasDTO,
    IUpdateProjectIdeasDTO
  >
  implements IProjectIdeasDAO
{
  constructor(
    @inject(IOC_TYPES.ProjectIdeasModel) projectIdeasModel: ProjectIdeasModel,
  ) {
    super(projectIdeasModel);
  }
}
