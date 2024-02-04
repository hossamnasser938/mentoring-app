import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IUserMessageDAO } from './userMessage.dao.abstract';
import {
  ICreateUserMessageDTO,
  IUpdateUserMessageDTO,
} from './userMessage.types';

@injectable()
export class UserMessageServie {
  constructor(
    @inject(IOC_TYPES.IUserMessageDAO)
    private readonly userMessageDAO: IUserMessageDAO,
  ) {}

  async getAllUserMessages() {
    return await this.userMessageDAO.getAll();
  }
  async getOneUserMessageByEmailOrPhoneNumber(query: string) {
    return await this.userMessageDAO.getUserMessageByEmailOrPhoneNumber(query);
  }

  async getOneUserMessage(id: string) {
    return await this.userMessageDAO.getOne(id);
  }

  async createOneUserMessage(createUserMessageDTO: ICreateUserMessageDTO) {
    if (!createUserMessageDTO.email && !createUserMessageDTO.phoneNumber) {
      throw new Error('An email or phone number is required.');
    }
    return await this.userMessageDAO.createOne(createUserMessageDTO);
  }

  async updateOneUserMessage(
    id: string,
    updateUserMessageDTO: IUpdateUserMessageDTO,
  ) {
    return await this.userMessageDAO.updateOne(id, updateUserMessageDTO);
  }

  async deleteOneUserMessage(id: string) {
    return await this.userMessageDAO.deleteOne(id);
  }
}
