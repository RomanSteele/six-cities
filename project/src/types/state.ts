import { store } from "../store";
import { Property } from "./property";
import { Review } from "./review";
import { UserLoginDataResponse } from "./user-login-data";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ActionData = {
  isFavorite: boolean,
  addReview: {
    comment: string,
    rating: number
  },
  isLoading:boolean,
  isCurrentSortCity: string,
  isCurrentSortingOption: string
};

export type AppData = {
  hotels: Property[],
  currentHotel: Property,
  nearbyHotels: Property[],
  favoriteHotels: Property[],
  reviews: Review[],
  error: string | null,
};

export type UserData = {
  authorizationStatus: string,
  userLoginData: UserLoginDataResponse
};


