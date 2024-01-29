import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IProjectIdeaDAO } from './projectIdea.dao.abstract';
import {
  ICreateProjectIdeaDTO,
  IUpdateProjectIdeaDTO,
} from './projectIdea.types';

@injectable()
export class ProjectIdeaServie {
  constructor(
    @inject(IOC_TYPES.IProjectIdeaDAO)
    private readonly projectIdeaDAO: IProjectIdeaDAO,
  ) {}

  async getAllProjectIdeas() {
    return this.projectIdeaDAO.getAll();
  }

  async getOneProjectIdea(id: string) {
    const idea = await this.projectIdeaDAO.getOne(id);
    if (!idea) {
      throw new Error('Project idea not exist');
    }

    return idea;
  }

  async createOneProjectIdea(createTodoDTO: ICreateProjectIdeaDTO) {
    if (!createTodoDTO) {
      throw new Error('all fields are required');
    }
    return this.projectIdeaDAO.createOne(createTodoDTO);
  }

  async updateOneProjectIdea(
    id: string,
    updateTodoDTO: IUpdateProjectIdeaDTO,
    createdMentor: string,
  ) {
    const projectIdea = await this.projectIdeaDAO.getOne(id);
    if (!projectIdea) {
      throw new Error('Project not exist');
    }
    if (projectIdea.createdMentor.toString() !== createdMentor) {
      throw new Error('Mentor is not allowed to update this data');
    }
    return this.projectIdeaDAO.updateOne(id, updateTodoDTO);
  }

  async deleteOneProjectIdea(id: string, createdMentor: string) {
    const projectIdea = await this.projectIdeaDAO.getOne(id);
    if (!projectIdea) {
      throw new Error('Project not exist');
    }
    if (projectIdea.createdMentor.toString() !== createdMentor) {
      throw new Error('Mentor is not allowed to delete this data');
    }
    return this.projectIdeaDAO.deleteOne(id);
  }
}
