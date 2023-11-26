import { IProjectIdeas } from '@core/entities/projectIdeas.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreateProjectIdeasDTO extends IProjectIdeas {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdateProjectIdeasDTO
  extends Partial<ICreateProjectIdeasDTO> {}
