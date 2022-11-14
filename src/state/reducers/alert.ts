import { createSlice } from '@reduxjs/toolkit';
import { AlertModel, MainState } from '@state/models/main-state';

const initialState: AlertModel = {
  type: null,
  message: null
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (_state, action) => ({ ...action.payload }),
    resetAlert: () => ({ ...initialState })
  }
});

export const alertReducer = alertSlice.reducer;

export const alertActions = { ...alertSlice.actions };

export const alertSelect = (state: MainState) => state.alert;
