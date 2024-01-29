import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  HelpMeModel,
  IHelpMeDocument,
} from '@core/data-layer/mongo-models/helpMe.model';
import { IHelpMe } from '@core/entities/helpMe.entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IHelpMeDAO } from './helpMe.dao.abstract';
import { ICreateHelpMeDTO, IUpdateHelpMeDTO } from './helpMe.types';

@injectable()
export class HelpMeDAO
  extends MongoGenericDAO<
    IHelpMe,
    IHelpMeDocument,
    ICreateHelpMeDTO,
    IUpdateHelpMeDTO
  >
  implements IHelpMeDAO
{
  constructor(
    @inject(IOC_TYPES.HelpMeModel) private readonly helpMeModel: HelpMeModel,
  ) {
    super(helpMeModel);
  }
  async getContactUsByEmailOrPhoneNumber(
    query: string,
  ): Promise<IHelpMe | null> {
    return await this.helpMeModel
      .findOne({ $or: [{ email: query }, { phoneNumber: query }] })
      .exec();
  }
}
