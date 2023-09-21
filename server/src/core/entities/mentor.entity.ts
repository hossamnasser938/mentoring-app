import { BaseEntity } from './base.entity';

export interface IMentor extends BaseEntity {
  name: string;
  title: string;
  description: string;
}
