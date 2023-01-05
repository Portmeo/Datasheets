import { RequestHandlerService } from '@core/requestHandler.service';
import { CONSTANTS } from '@shared/constants';
import { UserModel } from './user.model';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const AuthenticationService = {
  login: (user: any): Promise<{ access_token: string; user: UserModel }> => RequestHandlerService.post(`${BASE_URL}${CONSTANTS.REQUEST_ROUTES.LOGIN}`, { body: user })
};
