
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
}

export enum APIType {
  DataFetchHotels = 'data/fetchHotels',
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

