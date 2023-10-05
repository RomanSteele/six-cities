import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../../types/state';
import { NameSpace } from '../../../const';
import { initialProperty } from '../../../helpers';

const initialState: AppData  = {
  hotels: [],
  currentHotel: initialProperty,
  nearbyHotels: [initialProperty],
  favoriteHotels: [],
  reviews: [],
  error: null,
};

export const appData = createSlice ({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadHotels: (state, action) => {
      state.hotels = action.payload;
    },
    loadCurrentHotel: (state, action) => {
      state.currentHotel = action.payload;
    },
    loadNearbyHotels: (state, action) => {
      state.nearbyHotels = action.payload;
    },
    loadFavoriteHotels: (state, action) => {
      state.favoriteHotels = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loadHotels, loadCurrentHotel, loadNearbyHotels, loadFavoriteHotels, loadReviews, setError } = appData.actions;
