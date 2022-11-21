import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { data } from './slices/app-data/app-data';
import { actionData } from './slices/action-data/action-data';
import { userData } from './slices/user-data/user-data';


export const rootReducer = combineReducers({
  [NameSpace.Data]: data.reducer,
  [NameSpace.Action]: actionData.reducer,
  [NameSpace.User]: userData.reducer,
});
