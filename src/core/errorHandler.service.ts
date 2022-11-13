import { AlertService } from './alert.service';

export const ErrorHandlerService = {    
    setErrorGeneric(_error: any) {
        AlertService.loadingError()        
    }
};
