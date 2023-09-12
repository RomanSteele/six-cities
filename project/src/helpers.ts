import { Property } from "./types/property";
import { UserLoginDataResponse } from "./types/user-login-data";

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

  export const initialUserData:UserLoginDataResponse = {
    avatarUrl: '',
    email: '',
    id: 0,
    name: '',
    token: '',
  }

  export const validateEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email ? emailPattern.test(email) : false;
  };

  export const validatePassword = (password: string): boolean => {
    const passwordPattern = /^.*$/;
    return password ? passwordPattern.test(password) : false;
  };
