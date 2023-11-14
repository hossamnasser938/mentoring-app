import * as jwt from 'jsonwebtoken';

import { IToken } from './token.interface';
import { ITokenService } from './token.service.interface';

// import { IToken } from './token.interface';
// // import { TokenConfig } from './i.token.config';
// import { AbstractTokenService } from './token.service.interface';

// @injectable()
// export class TokenService extends AbstractTokenService {
//   generateToken<TPayload extends string | object | Buffer>(
//     token: IToken<TPayload>,
//     expiresIn: number = 60 * 60 * 60,
//   ): string {
//     return jwt.sign(token.payload, token.secretKey, { expiresIn });
//   }
//   verifyToken<TPayload>(
//     token: string,
//     secretKey: string,
//   ): string | jwt.JwtPayload | TPayload {
//     return jwt.verify(token, secretKey);
//   }
// }

export class TokenService implements ITokenService {
  generateToken<TPayload extends string | object | Buffer>(
    token: IToken<TPayload>,
    expiresIn: number,
  ): string {
    return jwt;
  }
}
