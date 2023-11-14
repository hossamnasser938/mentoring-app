import { IOC_TYPES } from '@core/ioc-container/types';
import { BcryptPassword } from '@core/Utilities/passwordHashing/bcryptPassword';
import { GenericTokenService } from '@core/Utilities/token/generic.token.service';
// import { GenericTokenService } from '@core/Utilities/token/generic.token.service';
import { inject, injectable } from 'inversify';

import { IUserDAO } from './user.dao.abstract';
import { ICreateUserDTO, LoginPayload } from './user.types';

@injectable()
export class UserService {
  constructor(
    @inject(IOC_TYPES.IUserDAO) private readonly userDAO: IUserDAO,
    @inject(IOC_TYPES.BcryptPassword)
    private readonly bcryptPassword: BcryptPassword,
    @inject(IOC_TYPES.GenericTokenService)
    private readonly loginToken: GenericTokenService<LoginPayload>,
  ) {}

  async signup(createUserDTO: ICreateUserDTO) {
    const checkUser = await this.userDAO.getUserByEmail(createUserDTO.email);
    if (checkUser) {
      throw new Error('User is already registered ');
    }
    const hashedPassword = this.bcryptPassword.hashPassword(
      createUserDTO.password,
    );
    return await this.userDAO.createOne({
      username: createUserDTO.username,
      email: createUserDTO.email,
      password: hashedPassword,
    });
  }

  async login(email: string, password: string) {
    const user = await this.userDAO.getUserByEmail(email);
    if (!user) {
      throw new Error('User in not rejesterd');
    }
    const comparePassword = this.bcryptPassword.comparePassword(
      password,
      user.password,
    );
    if (!comparePassword) {
      throw new Error('Password is not valid');
    }
    this.loginToken.getSecretKey('Mentoring App');
    this.loginToken.getPayload({
      email: email,
      role: user.role || 'User',
    });
    return this.loginToken.generateToken(60 * 60 * 60);
  }
}
