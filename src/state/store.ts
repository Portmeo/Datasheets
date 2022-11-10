import { configureStore } from '@reduxjs/toolkit';
import { notificationReducer } from './reducers/notification';
import { loaderReducer } from './reducers/loader';

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        notification: notificationReducer
    }
});