import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.js';
import { Property } from '../types/property';

import { APIRoute, ApiType, AppRoute, AuthorizationStatus } from '../const';

//import { redirectToRoute } from './action';
import { loadChosenProperty, loadProperties } from './slices/app-data/app-data';
import { AuthenticationData } from '../types/authentication-data';
import { UserLoginData } from '../types/user-login-data';
import { dropToken, saveToken } from '../services/token';
import { loadUserData, requireAuthorization } from './slices/user-data/user-data';
import { redirectToRoute } from './action';


export const fetchPropertiesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiType.DataFetchProperties,
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Property[]>(APIRoute.Properties);
      dispatch(loadProperties(data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error');
    }
  },
);

export const fetchChosenPropertyAction = createAsyncThunk<void, number | null, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiType.DataFetchChosenProperty,
  async (id, { dispatch, extra: api }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const { data } = await api.get<Property>(`${APIRoute.Property}/${id}`);
      dispatch(loadChosenProperty(data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error');
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthenticationData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiType.UserLogin,
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserLoginData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      dispatch(loadUserData(data));
      //dispatch(fetchFavoritesList());
      dispatch(requireAuthorization(AuthorizationStatus.Authorized));
      dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      console.log('error');
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  ApiType.UserLogout,
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    } catch (error) {
      console.log('error');
    }
  },
);
