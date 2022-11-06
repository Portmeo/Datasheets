import { createSlice } from "@reduxjs/toolkit";
import { Loader, MainState } from "../models/main-state";

const initialState: Loader = {
    state: false
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        show: (state: Loader) => {
            state.state = true;
        },
        hide: (state: Loader) => {
            state.state = false;
        }
    }
});

export const loaderReducer = loaderSlice.reducer;

export const loaderActions = { ...loaderSlice.actions };

export const loaderSelect = (state: MainState )=> state.loader.state;