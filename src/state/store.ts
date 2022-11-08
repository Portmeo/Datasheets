import { configureStore } from '@reduxjs/toolkit';
import { errorReducer } from './reducers/error';
import { loaderReducer } from './reducers/loader';

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        error: errorReducer
    }
});