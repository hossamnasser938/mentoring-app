import { BaseEntity } from './base.entity';

export interface IMentor extends BaseEntity {
  userId?: string;
  createdAdmin: string;
  username: string;
  title: string;
  description: string;
  youtubeLink: string;
  cv: string;
  profilePicture: string;
  isCreatedByAdmin: boolean;
}
