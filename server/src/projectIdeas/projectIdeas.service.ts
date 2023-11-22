import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IProjectIdeasDAO } from './projectIdeas.dao.abstract';
import {
  ICreateProjectIdeasDTO,
  IUpdateProjectIdeasDTO,
} from './projectIdeas.types';

@injectable()
export class ProjectIdeasServie {
  constructor(
    @inject(IOC_TYPES.IProjectIdeasDAO)
    private readonly projectIdeasDAO: IProjectIdeasDAO,
  ) {}

  async getAllProjectIdeass() {
    return this.projectIdeasDAO.getAll();
  }

  async getOneProjectIdeas(id: string) {
    const idea = await this.projectIdeasDAO.getOne(id);
    if (!idea) {
      throw new Error('Project idea not exist');
    }
    return this.projectIdeasDAO.getOne(id);
  }

  async createOneProjectIdeas(createTodoDTO: ICreateProjectIdeasDTO) {
    if (!createTodoDTO) {
      throw new Error('all fields are required');
    }
    return this.projectIdeasDAO.createOne(createTodoDTO);
  }

  async updateOneProjectIdeas(
    id: string,
    updateTodoDTO: IUpdateProjectIdeasDTO,
    createdMentor: string,
  ) {
    const projectIdea = await this.projectIdeasDAO.getOne(id);
    if (!projectIdea) {
      throw new Error('Project not exist');
    }
    if (projectIdea.createdMentor.toString() !== createdMentor) {
      throw new Error('Mentor is not allowed to update this data');
    }
    return this.projectIdeasDAO.updateOne(id, updateTodoDTO);
  }

  async deleteOneProjectIdeas(id: string, createdMentor: string) {
    const projectIdea = await this.projectIdeasDAO.getOne(id);
    if (!projectIdea) {
      throw new Error('Project not exist');
    }
    if (projectIdea.createdMentor.toString() !== createdMentor) {
      throw new Error('Mentor is not allowed to delete this data');
    }
    return this.projectIdeasDAO.deleteOne(id);
  }
}
