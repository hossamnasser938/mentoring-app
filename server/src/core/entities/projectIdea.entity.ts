import { BaseEntity } from './base.entity';

export interface IProjectIdea extends BaseEntity {
  name: string;
  description: string;
  youtubeLink: string;
  PDF: string;
  image?: string;
  summary?: string;
  createdMentor: string;
}
