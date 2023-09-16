import { IMentor } from '@core/entities/mentor.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreateMentorDTO extends IMentor {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdateMentorDTO extends Partial<ICreateMentorDTO> {}
