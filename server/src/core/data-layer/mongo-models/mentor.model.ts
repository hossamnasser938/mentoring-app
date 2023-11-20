import { IMentor } from '@core/entities/mentor.entity';
import { HydratedDocument, model, Schema, Types } from 'mongoose';

import { IModel } from './types';

export type IMentorDocument = HydratedDocument<IMentor>;
export type MentorModel = IModel<IMentor, IMentorDocument>;

const mentorSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User' },
  createdAdmin: { type: Types.ObjectId, ref: 'User', required: true },
  username: {
    type: String,
    unique: true, //so it can be copatable with userModel username
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  youtubeLink: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String, //must be converted into object
    required: true,
  },
  cv: {
    type: String, //must be converted into object
    required: true,
  },
  isCofirmed: { type: Boolean, default: false },
  isCreatedByAdmin: { type: Boolean, default: false },
});

mentorSchema.statics.build = (mentor: IMentor) => {
  return new mentorModel(mentor);
};
mentorSchema.pre('save', async function (this: IMentorDocument, next) {
  if (this.createdAdmin && this.isModified('createdAdmin')) {
    this.isCreatedByAdmin = true;
  }
  next();
});

const mentorModel: MentorModel = model<
  IMentorDocument,
  IModel<IMentor, IMentorDocument>
>('Mentor', mentorSchema);

export { mentorModel };
