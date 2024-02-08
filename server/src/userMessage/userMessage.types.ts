import { IUserMessage } from '@core/entities/userMessage.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreateUserMessageDTO extends IUserMessage {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUpdateUserMessageDTO extends Partial<ICreateUserMessageDTO> {}
