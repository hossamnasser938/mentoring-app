import { IOC_TYPES } from '@core/ioc-container/types';
import { inject, injectable } from 'inversify';
import * as jwt from 'jsonwebtoken';

import { IToken } from './token.interface';
import { ITokenService } from './token.service.interface';

@injectable()
export class GenericTokenService<TPayload extends string | object | Buffer> {
  constructor(
    @inject(IOC_TYPES.ITokenService)
    private readonly tokenService: ITokenService,
    protected secretKey: string,
    protected payload: TPayload,
  ) {}

  getSecretKey(secretKey: string) {
    this.secretKey = secretKey;
    console.log({ secretKey });
  }

  getPayload(payload: TPayload) {
    this.payload = payload;
  }

  generateToken(expiresIn: number = 60 * 60 * 60 * 60): string {
    const token: IToken<TPayload> = {
      secretKey: this.secretKey,
      payload: this.payload,
    };

    return this.tokenService.generateToken(token, expiresIn);
  }

  verifyToken(token: string): string | TPayload | jwt.JwtPayload {
    return this.tokenService.verifyToken(token, this.secretKey);
  }
}
