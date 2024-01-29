import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IContactUsDAO } from './contactUs.dao.abstract';
import { ICreateContactUsDTO, IUpdateContactUsDTO } from './contactUs.types';

@injectable()
export class ContactUsServie {
  constructor(
    @inject(IOC_TYPES.IContactUsDAO)
    private readonly contactUsDAO: IContactUsDAO,
  ) {}

  async getAllContactUss() {
    return this.contactUsDAO.getAll();
  }

  async getOneContactUs(id: string) {
    return this.contactUsDAO.getOne(id);
  }
  async getOneContactUsByEmailOrPhoneNumber(query: string) {
    return await this.contactUsDAO.getContactUsByEmailOrPhoneNumber(query);
  }

  async createOneContactUs(createTodoDTO: ICreateContactUsDTO) {
    return await this.contactUsDAO.createOne(createTodoDTO);
  }

  updateOneContactUs(id: string, updateTodoDTO: IUpdateContactUsDTO) {
    return this.contactUsDAO.updateOne(id, updateTodoDTO);
  }

  async deleteOneContactUs(id: string) {
    return await this.contactUsDAO.deleteOne(id);
  }
}
