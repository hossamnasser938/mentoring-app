import { IOC_TYPES } from '@core/ioc-container/types';
import { ITokenService } from '@core/utili/token/token.service.interface';
import { IUserDAO } from '@user/user.dao.abstract';
import { AuthPayloadDTO } from '@user/user.types';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
@injectable()
export class AuthMiddleware {
  constructor(
    @inject(IOC_TYPES.ITokenService)
    private readonly tokenService: ITokenService<AuthPayloadDTO>,
    @inject(IOC_TYPES.IUserDAO)
    private readonly userDAO: IUserDAO,
  ) {}

  async authantication(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      const tokenType = process.env.TOKEN_TYPE || 'Bearer__';
      if (!authorization?.startsWith(`${tokenType}`)) {
        throw new Error('Token and bearer key are required');
      }
      const token = authorization.split(`${tokenType}`)[1];

      const decoded = await this.tokenService.verifyToken(
        token,
        process.env.LOGIN_SECRET_KEY || 'loginSecreteKey',
      );

      if (!decoded?.id) {
        throw new Error('in_valide token payload');
      }
      const user = await this.userDAO.getOne(decoded.id);
      if (!user) {
        throw new Error('user is not rejesterd');
      }

      req.userDecodedData = decoded;
      next();
    } catch (error) {
      console.log(error);
    }
  }

  authorize(accessRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const userRole = req.userDecodedData?.role || '';
      if (!accessRoles.includes(userRole)) {
        throw new Error('user is not authorized');
      }
      next();
    };
  }
}
