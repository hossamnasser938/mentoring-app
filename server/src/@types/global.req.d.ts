import { IUser } from '@core/entities/user.entity';
import { LoginPayload } from '@user/user.types';
declare global {
  namespace Express {
    interface Request {
      userData?: IUser | null;
      userDecodedToken?: LoginPayload | null;
    }
  }
}
