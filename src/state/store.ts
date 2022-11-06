import { configureStore } from '@reduxjs/toolkit';
import { loaderReducer } from './reducers/loader';
import { modalReducer } from './reducers/modal';

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        modal: modalReducer
    }
});