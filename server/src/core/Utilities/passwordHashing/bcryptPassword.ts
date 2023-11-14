import * as bcrypt from 'bcrypt';
import { injectable } from 'inversify';

@injectable()
export class BcryptPassword {
  private static saltRounds = parseInt(process.env.SALT_ROUNDS || '8', 10);
  hashPassword(
    plainText: string,
    saltRound: number = BcryptPassword.saltRounds,
  ): string {
    return bcrypt.hashSync(plainText, saltRound);
  }

  comparePassword(plainText: string, encryptedValue: string): boolean {
    return bcrypt.compareSync(plainText, encryptedValue);
  }
}
