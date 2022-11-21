import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { User } from '../../../types/state';


const initialState: User = {
  authorizationStatus: true,
};

export const userData = createSlice ({
  name: NameSpace.Data,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.authorizationStatus = action.payload;
    },
  },
});

export const { requireAuthorization } = userData.actions;
