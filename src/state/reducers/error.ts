import { createSlice } from "@reduxjs/toolkit";
import { ErrorGenericModel, MainState } from "../models/main-state";

const initialState: ErrorGenericModel = {
    code: 0,
    message: null
};

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (_state, action) => ({ ...action.payload }),
        resetError: () => ({ ...initialState })
    }
});

export const errorReducer = errorSlice.reducer;

export const errorActions = { ...errorSlice.actions };

export const errorSelect = (state: MainState )=> state.error;