import { IProjectIdea } from '@core/entities/projectIdea.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreateProjectIdeaDTO extends IProjectIdea {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdateProjectIdeaDTO extends Partial<ICreateProjectIdeaDTO> {}
