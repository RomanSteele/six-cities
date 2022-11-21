import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { Action } from '../../../types/state';


const initialState: Action = {
  city: 'Paris',
  sortOrder: 'Popular',
};

export const actionData = createSlice ({
  name: NameSpace.Action,
  initialState,
  reducers: {
    updateCity: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.city = action.payload;
    },
    updateSortOrder: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.sortOrder = action.payload;
    },
  },
});

export const { updateCity, updateSortOrder } = actionData.actions;
