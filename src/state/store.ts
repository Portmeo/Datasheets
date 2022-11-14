import { configureStore } from '@reduxjs/toolkit';
import { alertReducer } from './reducers/alert';
import { loaderReducer } from './reducers/loader';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    alert: alertReducer
  }
});
