import { roles } from '@core/middleware/auth/auth.roles';

export const endPoints = {
  get: Object.values(roles),
};
