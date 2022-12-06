import { Stars } from './types/stars';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Property = '/offer',
  PropertyRoute = '/offer/:id',
  Favorites = '/favorites',
}

export enum NameSpace {
  Data = 'DATA',
  Action = 'ACTION',
  User = 'USER',
}

export enum ApiType {
  DataFetchProperties = 'data/fetchProperties',
  DataFetchChosenProperty = 'data/fetchChosenProperty',
  DataFetchChosenPropertyReviews = 'data/fetchChosenPropertyReviews',
  DataFetchFavoritesList = 'data/fetchPropertyList',
  UserLogin = 'user/login',
  UserLogout = 'user/logout',
  FavoriteListAdd = 'favorite/addProperty',
  PostReview = 'property/postReview',
  DataFetchNearby = 'data/fetchNearby'
}

export enum APIRoute {
  Properties = '/hotels',
  Property = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
  Reviews = '/comments',
  Nearby = '/hotels'
}

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];


export const SortOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum AuthorizationStatus {
  Authorized = 'AUTH',
  NotAuthorized = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const STARS: Stars[] = [
  { 'id': 5 },
  { 'id': 4 },
  { 'id': 3 },
  { 'id': 2 },
  { 'id': 1 },
];
