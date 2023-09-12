import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, APIType} from '../const';
import {AppDispatch, State} from '../types/state';


import { changeLoadingStatus } from './slices/action-data/action-data';
import { loadCurrentHotel, loadHotels, loadReviews  } from './slices/app-data/app-data';
import { Property } from '../types/property';
import { Review } from '../types/review';



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


export const fetchCurrentHotelAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.DataFetchRoom,
  async (id, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.get<Property>(APIRoute.Room.replace(':id', id.toString()));
    dispatch(loadCurrentHotel(data));
    dispatch(changeLoadingStatus(false));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.DataFetchReviews,
  async (id, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.get<Review[]>(APIRoute.Reviews.replace(':id', id.toString()));
    dispatch(loadReviews(data));
    dispatch(changeLoadingStatus(false));
  },
);
