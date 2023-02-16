import { createSlice, current } from '@reduxjs/toolkit';
import { LoaderModel, MainState } from '@state/models/main-state';

const initialState: LoaderModel = {
  inProgress: []
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    show: (state) => ({
      ...state,
      inProgress: [...state.inProgress, true]
    }),
    hide: (state) => {
      const stateValue: boolean[] = [...current(state).inProgress];
      const inProgress = stateValue.length === 0 || stateValue.length === 1 ? [] : stateValue.splice(0, 1);
      return {
        ...state,
        inProgress
      };
    }
  }
});

export const loaderReducer = loaderSlice.reducer;

export const loaderActions = { ...loaderSlice.actions };

export const loaderSelect = (state: MainState) => state.loader.inProgress;
