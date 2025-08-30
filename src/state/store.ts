import { configureStore } from '@reduxjs/toolkit';
import { alertReducer } from './reducers/alert';
import { loaderReducer } from './reducers/loader';
import { userReducer } from './reducers/user';
import { filtersReducer } from './reducers/filters';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    alert: alertReducer,
    user: userReducer,
    filters: filtersReducer
  }
});
