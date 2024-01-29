import { IHelpMe } from '@core/entities/helpMe.entity';
import { HydratedDocument, model, Schema } from 'mongoose';

import { IModel } from './types';

export type IHelpMeDocument = HydratedDocument<IHelpMe>;
export type HelpMeModel = IModel<IHelpMe, IHelpMeDocument>;

const helpMeSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    phoneNumber: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    department: { type: String },
    collage: { type: String },
    responded: { type: Boolean, default: false },

    timeToContact: {
      hour: Number,
      minute: Number,
    },
  },
  { timestamps: true },
);

helpMeSchema.statics.build = (helpMe: IHelpMe) => {
  return new helpMeModel(helpMe);
};

const helpMeModel: HelpMeModel = model<
  IHelpMeDocument,
  IModel<IHelpMe, IHelpMeDocument>
>('HelpMe', helpMeSchema);

export { helpMeModel };
