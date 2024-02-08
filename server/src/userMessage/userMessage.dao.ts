import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  IUserMessageDocument,
  UserMessageModel,
} from '@core/data-layer/mongo-models/userMessage.model';
import { IUserMessage } from '@core/entities/userMessage.entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IUserMessageDAO } from './userMessage.dao.abstract';
import {
  ICreateUserMessageDTO,
  IUpdateUserMessageDTO,
} from './userMessage.types';

@injectable()
export class UserMessageDAO
  extends MongoGenericDAO<
    IUserMessage,
    IUserMessageDocument,
    ICreateUserMessageDTO,
    IUpdateUserMessageDTO
  >
  implements IUserMessageDAO
{
  constructor(
    @inject(IOC_TYPES.UserMessageModel)
    private readonly userMessageModel: UserMessageModel,
  ) {
    super(userMessageModel);
  }
  async getUserMessageByEmailOrPhoneNumber(
    query: string,
  ): Promise<IUserMessage | null> {
    return await this.userMessageModel
      .findOne({ $or: [{ email: query }, { phoneNumber: query }] })
      .exec();
  }
}
