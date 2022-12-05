import { store } from '../store/index';
import { Property } from './property';
import { Review, ReviewPost } from './review';
import { UserLoginData } from './user-login-data';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Data = {
  properties: Property[];
  isDataLoaded: boolean;
  chosenProperty: Property;
  chosenPropertyReviews: Review[];
};

export type Action = {
  city: string;
  sortOrder: string;
  favorites: Property[];
  isLoading: boolean;
  userComment: ReviewPost;
}

export type User = {
  authorizationStatus: string;
  userLoginData: UserLoginData;
}
