import { Property } from "./types/property";
import { UserLoginData } from "./types/user-login-data";

export const initialProperty:Property =
{
  bedrooms: 0,
  city: {
    location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  },
  name: ''
  },
  description: '',
  goods: [
  ''
  ],
    host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: ''
    },
  id: 0,
  images: [
  ''
  ],
  isFavorite: false,
  isPremium: false,
  location: {
  latitude: 0,
  longitude: 0,
  zoom: 0
  },
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: ''
  }

  export const initialUserData:UserLoginData = {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  }


