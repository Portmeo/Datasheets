import { createSlice } from "@reduxjs/toolkit";
import { Modal, MainState } from "../models/main-state";

const initialState: Modal = {
    open: false
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state: Modal) => {
            state.open = true;
        },
        close: (state: Modal) => {
            state.open = false;
        }
    }
});

export const modalReducer = modalSlice.reducer;

export const modalActions = { ...modalSlice.actions };

export const modalSelect = (state: MainState )=> state.modal.open;