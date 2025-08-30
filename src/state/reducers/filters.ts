import { createSlice } from '@reduxjs/toolkit';
import { FiltersModel, MainState } from '@state/models/main-state';

const initialState: FiltersModel = {
  categoryFilter: [],
  searchFilter: ''
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryFilter: (state, action) => ({
      ...state,
      categoryFilter: action.payload
    }),
    setSearchFilter: (state, action) => ({
      ...state,
      searchFilter: action.payload
    }),
    clearAllFilters: () => initialState
  }
});

export const filtersReducer = filtersSlice.reducer;

export const filtersActions = { ...filtersSlice.actions };

export const filtersSelect = (state: MainState) => state.filters;