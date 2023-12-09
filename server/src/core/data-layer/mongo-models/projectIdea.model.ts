import { IProjectIdea } from '@core/entities/projectIdea.entity';
import { HydratedDocument, model, Schema, Types } from 'mongoose';

import { IModel } from './types';

export type IProjectIdeaDocument = HydratedDocument<IProjectIdea>;
export type ProjectIdeaModel = IModel<IProjectIdea, IProjectIdeaDocument>;

const projectIdeaSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  youtubeLink: { type: String, required: true },

  createdMentor: { type: Types.ObjectId, ref: 'Mentor', required: true },
  image: String, //its optional && must be converted into object
});

projectIdeaSchema.statics.build = (projectIdea: IProjectIdea) => {
  return new projectIdeaModel(projectIdea);
};

const projectIdeaModel: ProjectIdeaModel = model<
  IProjectIdeaDocument,
  IModel<IProjectIdea, IProjectIdeaDocument>
>('ProjectIdea', projectIdeaSchema);

export { projectIdeaModel };
