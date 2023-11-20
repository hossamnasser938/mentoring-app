import { IUser } from '@core/entities/user.entity';
import { HydratedDocument, model, Schema } from 'mongoose';

import { IModel } from './types';

export type IUserDocument = HydratedDocument<IUser>;
export type UserModel = IModel<IUser, IUserDocument>;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true, //so it can be copatable with userModel username
    require: true,
  },
  email: { type: String, require: true },

  password: { type: String, require: true },

  role: { type: String, default: 'User', enum: ['User', 'Admin', 'Mentor'] },
});

userSchema.statics.build = (user: IUser) => {
  return new userModel(user);
};
userSchema.pre('save', async function (this: IUserDocument, next) {
  if (
    this.email === process.env.ADMIN_EMAIL ||
    this.email === 'admin@email.com'
  ) {
    this.role = 'Admin';
  }
  next();
});

const userModel: UserModel = model<IUserDocument, IModel<IUser, IUserDocument>>(
  'User',
  userSchema,
);

export { userModel };
