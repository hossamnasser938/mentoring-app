import { BaseEntity } from './base.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProjectIdeas extends BaseEntity {
  name: string;
  description: string;
  youtubeLink: string;
  image?: string;
  createdMentor: string;
}
