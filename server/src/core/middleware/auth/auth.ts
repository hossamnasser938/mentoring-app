import { IOC_TYPES } from '@core/ioc-container/types';
import { ITokenService } from '@core/utili/token/token.service.interface';
import { IUserDAO } from '@user/user.dao.abstract';
import { LoginPayload } from '@user/user.types';
import { NextFunction, Request, Response } from 'express';
import { inject } from 'inversify';

export class AuthMiddleware {
  constructor(
    @inject(IOC_TYPES.ITokenService)
    private readonly tokenService: ITokenService<LoginPayload>,
    @inject(IOC_TYPES.IUserDAO) private readonly userDAO: IUserDAO,
  ) {}

  async authantication(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization?.startsWith(process.env.BEARER_KEY || '')) {
      throw new Error('Token and bearer key are required');
    }
    const token = authorization.split(process.env.BEARER_KEY || '')[1];

    const decoded = this.tokenService.verifyToken(
      token,
      process.env.LOGIN_SECRET_KEY || '',
    );
    if (!decoded?.id) {
      throw new Error('in_valide token payload');
    }
    const user = this.userDAO.getOne(decoded.id.toString());
    if (!user) {
      throw new Error('user is not rejesterd');
    }

    // req.userData = user;
    req.userDecodedToken = decoded;
    next();
  }

  async authorize(accessRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const userRole = req.userDecodedToken?.role || '';
      if (!accessRoles.includes(userRole)) {
        throw new Error('user is not authorized');
      }
      next();
    };
  }
}
