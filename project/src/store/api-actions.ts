import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, APIType, AuthorizationStatus} from '../const';
import {AppDispatch, State} from '../types/state';


import { addReview, changeLoadingStatus } from './slices/action-data/action-data';
import { loadCurrentHotel, loadFavoriteHotels, loadHotels, loadNearbyHotels, loadReviews  } from './slices/app-data/app-data';
import { Property } from '../types/property';
import { addReviewType, Review } from '../types/review';
import { UserLogin, UserLoginDataResponse } from '../types/user-login-data';
import { loadUserData, requireAuthorization } from './slices/user-data/user-data';
import { dropToken, saveToken } from '../services/token';


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

export const fetchFavoriteHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.DataFetchFavoriteHotels,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.get<Property[]>(APIRoute.Favorite);
    dispatch(loadFavoriteHotels(data));
    dispatch(changeLoadingStatus(false));
  },
);

export const fetchNearbyHotelsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.DataFetchNearbyHotels,
  async (id, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.get<Property[]>(APIRoute.NearbyHotels.replace(':id', id.toString()));
    dispatch(loadNearbyHotels(data));
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

export const postReview = createAsyncThunk<void, addReviewType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.ActionPostReview,
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.post<addReviewType>(APIRoute.Reviews.replace(':id', id.toString()), {comment, rating});
    dispatch(addReview(data));
    dispatch(fetchReviewsAction(id))
    dispatch(changeLoadingStatus(false));
  },
);

export const loginAction = createAsyncThunk<void, UserLogin, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.UserPostLogin,
  async ({email, password}, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.post<UserLoginDataResponse>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(loadUserData(data));
    fetchFavoriteHotelsAction();
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
    dispatch(changeLoadingStatus(false));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.UserPostLogout,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NotAuthorized));
    dispatch(changeLoadingStatus(false));
  },
);

export const checkAuthorization = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.UserPostLogout,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const { data } = await api.get<UserLoginDataResponse>(APIRoute.Login);
    dispatch(loadUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.Authorized));
    dispatch(changeLoadingStatus(false));
  },
);

export const changeFavoriteStatus = createAsyncThunk<void, {id:number, status:number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;

}>(
  APIType.ActionPostReview,
  async ({id, status}, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    await api.post(`${APIRoute.Favorite}/${id}/${status}`);
    dispatch(fetchFavoriteHotelsAction());
    dispatch(changeLoadingStatus(false));
  },
);

