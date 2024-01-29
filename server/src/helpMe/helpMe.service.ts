import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IHelpMeDAO } from './helpMe.dao.abstract';
import { ICreateHelpMeDTO, IUpdateHelpMeDTO } from './helpMe.types';

@injectable()
export class HelpMeServie {
  constructor(
    @inject(IOC_TYPES.IHelpMeDAO) private readonly helpMeDAO: IHelpMeDAO,
  ) {}

  async getAllHelpMes() {
    return await this.helpMeDAO.getAll();
  }

  async getOneHelpMe(id: string) {
    return await this.helpMeDAO.getOne(id);
  }
  async getOneHelpMeByEmailOrPhoneNumber(query: string) {
    return await this.helpMeDAO.getContactUsByEmailOrPhoneNumber(query);
  }

  async createOneHelpMe(createTodoDTO: ICreateHelpMeDTO) {
    return await this.helpMeDAO.createOne(createTodoDTO);
  }

  updateOneHelpMe(id: string, updateTodoDTO: IUpdateHelpMeDTO) {
    return this.helpMeDAO.updateOne(id, updateTodoDTO);
  }

  async deleteOneHelpMe(id: string) {
    return await this.helpMeDAO.deleteOne(id);
  }
}
