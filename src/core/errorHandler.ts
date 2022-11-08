import { CONSTANTS } from '@/shared/constants';
import { errorActions } from '@/state/reducers/error';
import { store } from '@/state/store';

export const SetErrorGeneric = () => {
    store.dispatch(errorActions.setError({
        code: CONSTANTS.UI_STATE.LOADING_ERROR,
        message: 'ERROR'
    }));
}