import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state.js';
import { Property } from '../types/property';

import { APIRoute, ApiType } from '../const';

//import { redirectToRoute } from './action';
import { loadProperties } from './slices/app-data/app-data';


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
