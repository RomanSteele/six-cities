import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { Data } from '../../../types/state';


const initialState: Data = {
  properties: [],
};

export const data = createSlice ({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadProperties: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.properties = action.payload;
    },
  },
});

export const { loadProperties } = data.actions;
