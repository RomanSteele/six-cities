import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { User } from '../../../types/state';


const initialState: User = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userLoginData: {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  },
};

export const userData = createSlice ({
  name: NameSpace.Data,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.authorizationStatus = action.payload;
    },
    loadUserData: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.userLoginData = action.payload;
    },
  },
});

export const { requireAuthorization, loadUserData } = userData.actions;
