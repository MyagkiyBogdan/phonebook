import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from 'models/models';

const initialState = { value: '' };
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state: { value: string }, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const getFilter = (state: IFilterState) => state.filter.value;
