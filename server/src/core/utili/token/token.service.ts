import { injectable } from 'inversify';
import * as jwt from 'jsonwebtoken';

import { ITokenService } from './token.service.interface';

@injectable()
export class TokenService<T extends string | object | Buffer>
  implements ITokenService<T>
{
  generateToken(
    payload: T,
    secretKey: string,
    expiresIn: number = 60 * 60,
  ): string {
    return jwt.sign(payload, secretKey, { expiresIn });
  }

  verifyToken(secretKey: string, token: string): T | null {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded as T;
    } catch (err) {
      return null;
    }
  }
}
