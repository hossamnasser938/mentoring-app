import { MongoGenericDAO } from '@core/data-layer/generic-dao.mongo';
import {
  ContactUsModel,
  IContactUsDocument,
} from '@core/data-layer/mongo-models/contactUs.model';
import { IContactUs } from '@core/entities/contactUs.entity';
import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IContactUsDAO } from './contactUs.dao.abstract';
import { ICreateContactUsDTO, IUpdateContactUsDTO } from './contactUs.types';

@injectable()
export class ContactUsDAO
  extends MongoGenericDAO<
    IContactUs,
    IContactUsDocument,
    ICreateContactUsDTO,
    IUpdateContactUsDTO
  >
  implements IContactUsDAO
{
  constructor(
    @inject(IOC_TYPES.ContactUsModel)
    private readonly contactUsModel: ContactUsModel,
  ) {
    super(contactUsModel);
  }
  async getContactUsByEmail(email: string): Promise<IContactUs | null> {
    return await this.contactUsModel.findOne({ email }).exec();
  }
}
