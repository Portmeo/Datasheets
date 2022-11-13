import { notificationActions } from '@/state/reducers/notification';
import { store } from '@/state/store';

export const NotificationService = {
    new(type: string, message: string) {
        store.dispatch(notificationActions.setNotification({
            type,
            message
        }));
    },
    reset() {
        store.dispatch(notificationActions.resetNotification());
    }
};
