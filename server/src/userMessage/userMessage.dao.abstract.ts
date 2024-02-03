import { AGenericDAO } from '@core/data-layer/generic-dao.abstract';
import { IUserMessage } from '@core/entities/userMessage.entity';

import {
  ICreateUserMessageDTO,
  IUpdateUserMessageDTO,
} from './userMessage.types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserMessageDAO
  extends AGenericDAO<
    IUserMessage,
    ICreateUserMessageDTO,
    IUpdateUserMessageDTO
  > {
  getUserMessageByEmailOrPhoneNumber(
    query: string,
  ): Promise<IUserMessage | null>;
}
