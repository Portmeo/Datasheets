import { createSlice } from '@reduxjs/toolkit';
import { MainState, UserModel } from '@state/models/main-state';

const initialState: UserModel | null = null;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_state, action) => ({ ...action.payload }),
    logout: () => (null)
  }
});

export const userReducer = userSlice.reducer;

export const userActions = { ...userSlice.actions };

export const userSelect = (state: MainState) => state.user;
