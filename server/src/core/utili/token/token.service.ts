import { injectable } from 'inversify';
import * as jwt from 'jsonwebtoken';

import { ITokenService } from './token.service.interface';

@injectable()
export class TokenService<T extends string | object | Buffer>
  implements ITokenService<T>
{
  generateToken(payload: T, secretKey: string, expiresIn: number): string {
    const DEFAULT_TOKEN_EXPIRATION_SECONDS = expiresIn || 60 * 60 * 60;
    return jwt.sign(payload, secretKey, {
      expiresIn: DEFAULT_TOKEN_EXPIRATION_SECONDS,
    });
  }

  verifyToken(token: string, secretKey: string): any | null {
    try {
      return jwt.verify(token, secretKey);
      // return decoded as T;
    } catch (err) {
      console.log(err);

      return null;
    }
  }
}
