import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, APIType} from '../const';
import {AppDispatch, State} from '../types/state';


import { changeLoadingStatus } from './slices/action-data/action-data';
import { loadHotels  } from './slices/app-data/app-data';
import { Property } from '../types/property';



export const fetchHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.DataFetchHotels,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.get<Property[]>(APIRoute.Hotels);
    dispatch(loadHotels(data));
    dispatch(changeLoadingStatus(false));
  },
);
