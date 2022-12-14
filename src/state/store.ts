import { configureStore } from '@reduxjs/toolkit';
import { alertReducer } from './reducers/alert';
import { loaderReducer } from './reducers/loader';
import { userReducer } from './reducers/user';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    alert: alertReducer,
    user: userReducer
  }
});
