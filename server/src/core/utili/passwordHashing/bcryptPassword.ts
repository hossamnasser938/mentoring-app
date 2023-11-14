import * as bcrypt from 'bcrypt';
import { injectable } from 'inversify';

import { IPasswordHasher } from './hashPassword.abstract';

@injectable()
export class BcryptPassword implements IPasswordHasher {
  hashPassword(password: string, saltRound: number): string {
    return bcrypt.hashSync(password, saltRound);
  }
  comparePassword(password: string, hashPass: string): boolean {
    return bcrypt.compareSync(password, hashPass);
  }
}
