import { useSelector } from 'react-redux';
import { loaderSelect } from "@/state/reducers/loader";
import { notificationSelect } from "@/state/reducers/notification";
import { NotificationService } from '@/core/notifications.service';

export const useLayout = () => {
    const loader = useSelector(loaderSelect);
    const notification = useSelector(notificationSelect);
    const handlerClose = () => {
        NotificationService.reset();
    };

    return {
        loader,
        notification,
        handlerClose
    }
};
