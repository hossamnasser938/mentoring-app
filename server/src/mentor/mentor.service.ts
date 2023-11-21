import { MENTOR_CONSTANTS } from '@core/config';
import { IOC_TYPES } from '@core/ioc-container/types';
import { IUserDAO } from '@user/user.dao.abstract';
import { inject, injectable } from 'inversify';

import { IMentorDAO } from './mentor.dao.abstract';
import { ICreateMentorDTO, IUpdateMentorDTO } from './mentor.types';

@injectable()
export class MentorServie {
  constructor(
    @inject(IOC_TYPES.IUserDAO) private readonly userDAO: IUserDAO,

    @inject(IOC_TYPES.IMentorDAO) private readonly mentorDAO: IMentorDAO,
  ) {}

  getAllMentors() {
    return this.mentorDAO.getAll();
  }

  getOneMentor(id: string) {
    return this.mentorDAO.getOne(id);
  }

  async createOneMentor(createTodoDTO: ICreateMentorDTO) {
    // Validate required fields permenently
    if (!createTodoDTO) {
      throw new Error('all fields are required');
    }

    const checkMentor = await this.mentorDAO.getMentorByName(
      createTodoDTO.username,
    );

    if (checkMentor) {
      throw new Error('User already exist');
    }
    const { MIN_TITLE_LENGTH, MIN_DESCRIPTION_LENGTH } = MENTOR_CONSTANTS;

    if (createTodoDTO.title.length < MIN_TITLE_LENGTH) {
      throw new Error(
        `Title should be at least ${MIN_TITLE_LENGTH} characters`,
      );
    }
    if (createTodoDTO.description.length < MIN_DESCRIPTION_LENGTH) {
      throw new Error(
        `Description should be at least ${MIN_DESCRIPTION_LENGTH} characters`,
      );
    }

    return this.mentorDAO.createOne(createTodoDTO);
  }

  async updateOneMentor(
    id: string,
    updateTodoDTO: IUpdateMentorDTO,
    authoriaedMentor: string,
  ) {
    try {
      const mentor = await this.mentorDAO.getOne(id);

      if (!mentor || mentor?.userId?.toString() !== authoriaedMentor) {
        throw new Error('Mentor is not allowed to update this data ');
      }
      const updatedFields: IUpdateMentorDTO = {};
      if (updateTodoDTO.username) {
        if (updateTodoDTO.username === mentor.username) {
          throw new Error('Sorry you cant update username with the same Name');
        }
        if (await this.mentorDAO.getMentorByName(updateTodoDTO.username)) {
          throw new Error('Not allowed username ,duplicate name');
        }
        updatedFields.username = updateTodoDTO.username;
        await this.userDAO.updateUserName(
          authoriaedMentor,
          updateTodoDTO.username,
        );
      }
      if (updateTodoDTO.title) {
        const { MIN_TITLE_LENGTH } = MENTOR_CONSTANTS;
        if (updateTodoDTO?.title.length < MIN_TITLE_LENGTH) {
          throw new Error(
            `Title should be at least ${MIN_TITLE_LENGTH} characters`,
          );
        }
        updatedFields.title = updateTodoDTO.title;
      }

      if (updateTodoDTO.description) {
        const { MIN_DESCRIPTION_LENGTH } = MENTOR_CONSTANTS;

        if (updateTodoDTO?.description.length < MIN_DESCRIPTION_LENGTH) {
          throw new Error(
            `Description should be at least ${MIN_DESCRIPTION_LENGTH} characters`,
          );
        }
        updatedFields.description = updateTodoDTO.description;
      }

      if (updateTodoDTO.youtubeLink) {
        updatedFields.youtubeLink = updateTodoDTO.youtubeLink;
      }
      //  remide checks for requestAnimationFrame.file of image and cv
      return this.mentorDAO.updateOne(id, updatedFields);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOneMentor(id: string) {
    const mentor = await this.mentorDAO.getOne(id);

    if (!mentor || !mentor?.userId) {
      throw new Error(`Mentor is not exist`);
    }

    await this.userDAO.deleteOne(mentor.userId);

    return this.mentorDAO.deleteOne(id);
  }
}
