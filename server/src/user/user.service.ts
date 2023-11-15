import { IOC_TYPES } from '@core/ioc-container/types';
import { IPasswordHasher } from '@core/utili/passwordHashing/hashPassword.abstract';
import { ITokenService } from '@core/utili/token/token.service.interface';
import { inject, injectable } from 'inversify';

import { IUserDAO } from './user.dao.abstract';
import { ICreateUserDTO, LoginPayload } from './user.types';

@injectable()
export class UserService {
  constructor(
    @inject(IOC_TYPES.IUserDAO) private readonly userDAO: IUserDAO,
    @inject(IOC_TYPES.IPasswordHasher)
    private readonly PasswordHasher: IPasswordHasher,
    @inject(IOC_TYPES.ITokenService)
    private readonly tokenService: ITokenService<LoginPayload>,
  ) {}

  async signup(createUserDTO: ICreateUserDTO) {
    const checkUser = await this.userDAO.getUserByEmail(createUserDTO.email);
    if (checkUser) {
      throw new Error('User is already registered ');
    }

    const hashedPassword = this.PasswordHasher.hashPassword(
      createUserDTO.password,
      parseInt(process.env.UER_HASHING_PASS_SALT_ROUNDS || '8', 10),
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
    const comparePassword = this.PasswordHasher.comparePassword(
      password,
      user.password,
    );
    if (!comparePassword) {
      throw new Error('Password is not valid');
    }
    return this.tokenService.generateToken(
      {
        email,
        role: user.role || 'User',
        id: user._id,
      },
      process.env.LOGIN_SECRET_KEY || 'loginSecreteKey',
      60 * 60 * 60,
    );
  }
}
