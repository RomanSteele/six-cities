import { combineReducers } from '@reduxjs/toolkit';
import { appData } from './slices/app-data/app-data';
import { userData } from './slices/user-data/user-data';
import { actionData } from './slices/action-data/action-data';
import { NameSpace } from '../const';


export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.User]: userData.reducer,
  [NameSpace.Action]: actionData.reducer,
});
