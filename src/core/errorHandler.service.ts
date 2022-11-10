import { CONSTANTS } from '@/shared/constants';
import { notificationActions } from '@/state/reducers/notification';
import { store } from '@/state/store';

export const ErrorHandlerService = {    
    setErrorGeneric(_error: any) {
        store.dispatch(notificationActions.setNotification({
            type: CONSTANTS.SEVERITY_NOTIFICATION.ERROR,
            message: CONSTANTS.UI_STATE_MESSAGE[CONSTANTS.UI_STATE.LOADING_ERROR]
        }));
    }
}
