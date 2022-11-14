import { CONSTANTS } from '@/shared/constants';
import { alertActions } from '@/state/reducers/alert';
import { store } from '@/state/store';

export const AlertService = {
  custom (type: string, message: string) {
    store.dispatch(alertActions.setAlert({
      type,
      message
    }));
  },
  loadingError () {
    store.dispatch(alertActions.setAlert({
      type: CONSTANTS.SEVERITY_ALERT.ERROR,
      message: CONSTANTS.UI_STATE_MESSAGE[CONSTANTS.UI_STATE.LOADING_ERROR]
    }));
  },
  proccesSuccess () {
    store.dispatch(alertActions.setAlert({
      type: CONSTANTS.SEVERITY_ALERT.SUCCESS,
      message: CONSTANTS.UI_STATE_MESSAGE[CONSTANTS.UI_STATE.PROCESS_SUCCESS]
    }));
  },
  reset () {
    store.dispatch(alertActions.resetAlert());
  }
};
