import { IProjectIdeas } from '@core/entities/projectIdeas.entity';
import { HydratedDocument, model, Schema, Types } from 'mongoose';

import { IModel } from './types';

export type IProjectIdeasDocument = HydratedDocument<IProjectIdeas>;
export type ProjectIdeasModel = IModel<IProjectIdeas, IProjectIdeasDocument>;

const projectIdeasSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  youtubeLink: { type: String, required: true },

  createdMentor: { type: Types.ObjectId, ref: 'Mentor', required: true },
  image: String, //its optional && must be converted into object
});

projectIdeasSchema.statics.build = (projectIdeas: IProjectIdeas) => {
  return new projectIdeasModel(projectIdeas);
};

const projectIdeasModel: ProjectIdeasModel = model<
  IProjectIdeasDocument,
  IModel<IProjectIdeas, IProjectIdeasDocument>
>('ProjectIdeas', projectIdeasSchema);

export { projectIdeasModel };
