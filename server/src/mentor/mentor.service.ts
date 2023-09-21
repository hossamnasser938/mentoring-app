import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';

import { IMentorDAO } from './mentor.dao.abstract';
import { ICreateMentorDTO, IUpdateMentorDTO } from './mentor.types';

@injectable()
export class MentorServie {
  constructor(
    @inject(IOC_TYPES.IMentorDAO) private readonly mentorDAO: IMentorDAO,
  ) {}

  getAllMentors() {
    return this.mentorDAO.getAll();
  }

  getOneMentor(id: string) {
    return this.mentorDAO.getOne(id);
  }

  createOneMentor(createTodoDTO: ICreateMentorDTO) {
    return this.mentorDAO.createOne(createTodoDTO);
  }

  updateOneMentor(id: string, updateTodoDTO: IUpdateMentorDTO) {
    return this.mentorDAO.updateOne(id, updateTodoDTO);
  }

  deleteOneMentor(id: string) {
    return this.mentorDAO.deleteOne(id);
  }
}
