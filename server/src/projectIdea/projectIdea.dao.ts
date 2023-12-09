import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  IProjectIdeaDocument,
  ProjectIdeaModel,
} from '@core/data-layer/mongo-models/projectIdea.model';
import { IProjectIdea } from '@core/entities/projectIdea.entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IProjectIdeaDAO } from './projectIdea.dao.abstract';
import {
  ICreateProjectIdeaDTO,
  IUpdateProjectIdeaDTO,
} from './projectIdea.types';

@injectable()
export class ProjectIdeaDAO
  extends MongoGenericDAO<
    IProjectIdea,
    IProjectIdeaDocument,
    ICreateProjectIdeaDTO,
    IUpdateProjectIdeaDTO
  >
  implements IProjectIdeaDAO
{
  constructor(
    @inject(IOC_TYPES.ProjectIdeaModel) projectIdeaModel: ProjectIdeaModel,
  ) {
    super(projectIdeaModel);
  }
}
