import { Property } from "./property";
import { Review } from "./review";
import { UserLoginData } from "./user-login-data";

export type ActionData = {
  isFavorite: boolean,
  addReview: {
    comment: string,
    rating: number
  },
  isLoading:boolean,
};

export type AppData = {
  hotels: Property[],
  currentHotel: Property,
  nearbyHotels: Property,
  favoriteHotels: Property[],
  reviews: Review[],
  error: string | null,
};

export type UserData = {
  authorizationStatus: string,
  userLoginData: UserLoginData
};

