import { createSlice } from "@reduxjs/toolkit";
import { LoaderModel, MainState } from "../models/main-state";

const initialState: LoaderModel = {
    state: false
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        show: (state) => {
            state.state = true;
        },
        hide: (state) => {
            state.state = false;
        }
    }
});

export const loaderReducer = loaderSlice.reducer;

export const loaderActions = { ...loaderSlice.actions };

export const loaderSelect = (state: MainState )=> state.loader.state;