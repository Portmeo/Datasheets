import { store } from '@/state/store';
import { loaderActions } from '@/state/reducers/loader';

export const LoaderService = {
    show() {
        store.dispatch(loaderActions.show());
    },
    hide() {
        store.dispatch(loaderActions.hide());
    }
};
