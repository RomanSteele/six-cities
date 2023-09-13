import { SortingOptions } from "./const";
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


  export const sortPropertiesByOption = (option: string, properties: Property[]):Property[] | [] => {
    if(properties && option){

      if(option === SortingOptions[0])
    { return properties }

    if(option === SortingOptions[1])
    { return properties.slice().sort((a, b) => a.price - b.price)}

    if(option === SortingOptions[2])
    { return properties.slice().sort((a, b) => b.price - a.price)}

    if(option === SortingOptions[3])
    { return properties.slice().sort((a, b) => b.rating - a.rating)}
    }
return []
  }
