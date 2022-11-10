import { useSelector, useDispatch } from 'react-redux';
import { loaderSelect } from "@/state/reducers/loader";
import { notificationSelect } from "@/state/reducers/notification";
import { notificationActions } from '@/state/reducers/notification';

export const useLayout = () => {
    const dispatch = useDispatch();
    const loader = useSelector(loaderSelect);
    const notification = useSelector(notificationSelect);
    const handlerClose = () => {
        dispatch(notificationActions.resetNotification());
    };

    return {
        loader,
        notification,
        handlerClose
    }
};
