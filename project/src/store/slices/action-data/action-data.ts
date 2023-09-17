import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortingOptions, startSortCity } from '../../../const';

import { ActionData } from '../../../types/state';


const initialState:ActionData  = {
  isFavorite: false,
  addReview: {
    comment: '',
    rating: 0
  },
  isLoading: false,
  isCurrentSortCity: startSortCity,
  isCurrentSortingOption: SortingOptions[0]
};

export const actionData = createSlice ({
  name: NameSpace.Action,
  initialState,
  reducers: {
    updateIsFavorite: (state, action) => {
      state.isFavorite = action.payload;
    },
    updateCurrentSortCity: (state,action) => {
      state.isCurrentSortCity = action.payload
    },
    updateSortingOption: (state,action) => {
      state.isCurrentSortingOption = action.payload
    },
    addReview: (state, action) => {
      state.addReview = action.payload;
    },
    changeLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },

  },
});

export const { addReview , updateIsFavorite, changeLoadingStatus, updateCurrentSortCity, updateSortingOption } = actionData.actions;
