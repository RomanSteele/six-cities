import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { Data } from '../../../types/state';


const initialState: Data = {
  properties: [],
  isDataLoaded: false,
  chosenProperty: {
    bedrooms: 0,
    city: {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      name: '',
    },
    description: '',
    goods: [''],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 0,
    images: [''],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    maxAdults: 0,
    previewImage: '',
    price: 0,
    rating: 0,
    title: '',
    type: '',

  },
  chosenPropertyReviews: [{
    comment: '',
    date: '',
    id: 0,
    rating: 0,
    user: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
  }]
};

export const data = createSlice ({
  name: NameSpace.Data,
  initialState,
  reducers: {
    loadProperties: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.properties = action.payload;
      state.isDataLoaded = true;
    },
    loadChosenProperty: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.chosenProperty = action.payload;
      state.isDataLoaded = true;
    },
    loadChosenPropertyReviews: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.chosenPropertyReviews = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const { loadProperties, loadChosenProperty, loadChosenPropertyReviews } = data.actions;
