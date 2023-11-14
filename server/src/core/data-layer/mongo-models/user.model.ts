import { IUser } from '@core/entities/user.entity';
import { HydratedDocument, model, Schema } from 'mongoose';

import { IModel } from './types';

export type IUserDocument = HydratedDocument<IUser>;
export type UserModel = IModel<IUser, IUserDocument>;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  email: { type: String, require: true },

  password: { type: String, require: true },

  role: { type: String, default: 'User', enum: ['User', 'Admin', 'Montor'] },
});

userSchema.statics.build = (user: IUser) => {
  return new userModel(user);
};

const userModel: UserModel = model<IUserDocument, IModel<IUser, IUserDocument>>(
  'User',
  userSchema,
);

export { userModel };
