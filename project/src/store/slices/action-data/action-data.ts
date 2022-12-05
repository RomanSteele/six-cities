import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../const';
import { Action } from '../../../types/state';


const initialState: Action = {
  city: 'Paris',
  sortOrder: 'Popular',
  favorites: [],
  isLoading: true,
  userComment: {
    id: 0,
    comment: '',
    rating: 0,
  },
};

export const actionData = createSlice ({
  name: NameSpace.Action,
  initialState,
  reducers: {
    updateCity: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.city = action.payload;
    },
    updateSortOrder: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.sortOrder = action.payload;
    },
    loadFavoritesList: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.favorites = action.payload;
    },
    changeLoadingStatus: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.isLoading = action.payload;
    },
    addComment: (state, action) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.userComment = action.payload;
    },
  },
});

export const { updateCity, updateSortOrder, loadFavoritesList, changeLoadingStatus, addComment } = actionData.actions;
