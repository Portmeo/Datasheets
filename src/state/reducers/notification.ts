import { createSlice } from "@reduxjs/toolkit";
import { NotificationModel, MainState } from "../models/main-state";

const initialState: NotificationModel = {
    type: null,
    message: null
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification: (_state, action) => ({ ...action.payload }),
        resetNotification: () => ({ ...initialState })
    }
});

export const notificationReducer = notificationSlice.reducer;

export const notificationActions = { ...notificationSlice.actions };

export const notificationSelect = (state: MainState )=> state.notification;