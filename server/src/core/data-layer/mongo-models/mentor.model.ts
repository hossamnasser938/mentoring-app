import { IMentor } from '@core/entities/mentor.entity';
import { HydratedDocument, model, Schema } from 'mongoose';

import { IModel } from './types';

export type IMentorDocument = HydratedDocument<IMentor>;
export type MentorModel = IModel<IMentor, IMentorDocument>;

const mentorSchema = new Schema({
  name: {
    type: String,
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
});

mentorSchema.statics.build = (mentor: IMentor) => {
  return new mentorModel(mentor);
};

const mentorModel: MentorModel = model<
  IMentorDocument,
  IModel<IMentor, IMentorDocument>
>('Mentor', mentorSchema);

export { mentorModel };
