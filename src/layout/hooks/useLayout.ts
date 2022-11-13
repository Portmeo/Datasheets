import { useSelector } from 'react-redux';
import { loaderSelect } from "@/state/reducers/loader";
import { alertSelect } from "@/state/reducers/alert";
import { AlertService } from '@/core/alert.service';
import { useLocation } from 'react-router-dom';

export const useLayout = () => {
    const location = useLocation();
    const loader = useSelector(loaderSelect);
    const alert = useSelector(alertSelect);
    const handlerClose = () => {
        AlertService.reset();
    };

    return {
        loader,
        alert,
        handlerClose,
        location
    }
};
