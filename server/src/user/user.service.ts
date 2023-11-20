import { IOC_TYPES } from '@core/ioc-container/types';
import { IPasswordHasher } from '@core/utili/passwordHashing/hashPassword.abstract';
import { ITokenService } from '@core/utili/token/token.service.interface';
import { IMentorDAO } from '@mentor/mentor.dao.abstract';
import { inject, injectable } from 'inversify';

import { IUserDAO } from './user.dao.abstract';
import { AuthPayloadDTO, ICreateUserDTO, ILoginDTO } from './user.types';

@injectable()
export class UserService {
  constructor(
    @inject(IOC_TYPES.IUserDAO) private readonly userDAO: IUserDAO,
    @inject(IOC_TYPES.IPasswordHasher)
    private readonly PasswordHasher: IPasswordHasher,
    @inject(IOC_TYPES.ITokenService)
    private readonly tokenService: ITokenService<AuthPayloadDTO>,
    @inject(IOC_TYPES.IMentorDAO) private readonly mentorDAO: IMentorDAO,
  ) {}

  async signup(createUserDTO: ICreateUserDTO) {
    const checkUser = await this.userDAO.getUserByEmail(createUserDTO.email);
    if (checkUser) {
      throw new Error('User is already registered ');
    }

    const hashedPassword = this.PasswordHasher.hashPassword(
      createUserDTO.password,
      parseInt(process.env.USER_HASHING_PASS_SALT_ROUNDS || '8', 10),
    );

    const createUser = await this.userDAO.createOne({
      username: createUserDTO.username,
      email: createUserDTO.email,
      password: hashedPassword,
      role: createUserDTO.role,
    });
    return createUser;
  }

  async login(loginDTO: ILoginDTO, defaultRole: string[]) {
    const user = await this.userDAO.getUserByEmail(loginDTO.email);
    if (!user) {
      throw new Error('User in not registered');
    }
    if (!defaultRole.includes(user.role)) {
      throw new Error('please make sure you are login from the right port');
    }
    const comparePassword = this.PasswordHasher.comparePassword(
      loginDTO.password,
      user.password,
    );
    if (!comparePassword) {
      throw new Error('Password is not valid');
    }
    return this.tokenService.generateToken(
      {
        email: loginDTO.email,
        role: user.role || 'User',
        id: user._id,
      },
      process.env.LOGIN_SECRET_KEY || 'loginSecreteKey',
    );
  }

  async confirmMentorSignUp(username: string): Promise<void> {
    try {
      const user = await this.userDAO.getUserByName(username);

      if (!user) {
        throw new Error('Mentor not found');
      }

      const checkMentor = await this.mentorDAO.getMentorByName(username);
      if (!checkMentor?.isCreatedByAdmin) {
        await this.userDAO.deleteOne(user._id);
        throw new Error('Only mentors are allowed to access this port');
      }

      await this.mentorDAO.findByNameAndUpdate(user.username, {
        userId: user._id,
        isCofirmed: true,
      });
    } catch (error) {
      throw new Error('Failed to confirm mentor signup: ' + error);
    }
  }
}
