import { store } from '../store/index';
import { Property } from './property';
import { UserLoginData } from './user-login-data';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Data = {
  properties: Property[];
  isDataLoaded: boolean;
  chosenProperty: Property;
};

export type Action = {
  city: string;
  sortOrder: string;
}

export type User = {
  authorizationStatus: string;
  userLoginData: UserLoginData;
}
