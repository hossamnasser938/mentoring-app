import { BaseEntity } from './base.entity';

export interface IProjectIdea extends BaseEntity {
  name: string;
  description: string;
  youtubeLink: string;
  image?: string;
  createdMentor: string;
}
