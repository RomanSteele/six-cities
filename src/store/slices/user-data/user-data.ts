/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createSlice } from '@reduxjs/toolkit';
import { UserData } from '../../../types/state';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { initialUserData } from '../../../helpers';

const initialState: UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userLoginData: initialUserData,
};

export const userData = createSlice ({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    loadUserData: (state, action) => {
      state.userLoginData = action.payload;
    },
  },
});

export const { requireAuthorization, loadUserData } = userData.actions;
