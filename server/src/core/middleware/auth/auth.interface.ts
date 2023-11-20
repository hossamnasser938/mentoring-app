import { NextFunction, Request, Response } from 'express';

export interface IAuthMiddleware {
  authentication(req: Request, res: Response, next: NextFunction): void;
  authorize(
    accessRoles: string[],
  ): (req: Request, res: Response, next: NextFunction) => void;
}
