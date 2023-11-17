import { AuthPayloadDTO } from '@user/user.types';
declare global {
  namespace Express {
    interface Request {
      userDecodedData?: AuthPayloadDTO;
    }
  }
}
