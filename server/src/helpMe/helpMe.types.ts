import { IHelpMe } from '@core/entities/helpMe.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreateHelpMeDTO extends IHelpMe {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdateHelpMeDTO extends Partial<ICreateHelpMeDTO> {}
