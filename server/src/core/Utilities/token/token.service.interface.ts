import * as jwt from 'jsonwebtoken';

import { IToken } from './token.interface';
export interface ITokenService {
  generateToken<TPayload extends string | object | Buffer>(
    token: IToken<TPayload>,
    expiresIn: number,
  ): string;

  verifyToken<TPayload>(
    token: string,
    secretKey: string,
  ): string | jwt.JwtPayload | TPayload;
}
