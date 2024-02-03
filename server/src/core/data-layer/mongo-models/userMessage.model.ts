import { IUserMessage } from '@core/entities/userMessage.entity';
import { HydratedDocument, model, Schema } from 'mongoose';

import { IModel } from './types';

export type IUserMessageDocument = HydratedDocument<IUserMessage>;
export type UserMessageModel = IModel<IUserMessage, IUserMessageDocument>;

const userMessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    phoneNumber: { type: String, unique: true, sparse: true },
    message: { type: String, required: true },
    responded: { type: Boolean, default: false },
  },
  { timestamps: true },
);

userMessageSchema.statics.build = (userMessage: IUserMessage) => {
  return new userMessageModel(userMessage);
};

const userMessageModel: UserMessageModel = model<
  IUserMessageDocument,
  IModel<IUserMessage, IUserMessageDocument>
>('UserMessage', userMessageSchema);

export { userMessageModel };
