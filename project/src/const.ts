
export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  AddToFavorites = '/favorite/:id/:status',
  AddReview = '/comments/:id',
  Room = '/hotels/:id',
  NotFound='*',
}

export enum APIRoute {
  Hotels = '/hotels',
  Room = '/hotels/:id',
  Reviews ='/comments/:id'
}

export enum APIType {
  DataFetchHotels = 'data/fetchHotels',
  DataFetchRoom = 'data/fetchRoom',
  DataFetchReviews = 'data/fetchReviews'
}

export enum AuthorizationStatus {
  Authorized = 'AUTH',
  NotAuthorized = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Action = 'ACTION',
  Data = 'DATA',
  User = 'USER',
}

export const CardsListType = [
    {title: 'nearPlaces'},
    {title: 'citiesPlaces'},
];

export const Cities = ['Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'];


