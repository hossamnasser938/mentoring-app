import { IContactUs } from '@core/entities/contactUs.entity';
import { HydratedDocument, model, Schema } from 'mongoose';

import { IModel } from './types';

export type IContactUsDocument = HydratedDocument<IContactUs>;
export type ContactUsModel = IModel<IContactUs, IContactUsDocument>;

const contactUsSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    phoneNumber: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    field: { type: String },
    timeToContact: {
      hour: Number,
      minute: Number,
    },
  },
  { timestamps: true },
);

contactUsSchema.statics.build = (contactUs: IContactUs) => {
  return new contactUsModel(contactUs);
};

const contactUsModel: ContactUsModel = model<
  IContactUsDocument,
  IModel<IContactUs, IContactUsDocument>
>('ContactUs', contactUsSchema);

export { contactUsModel };
