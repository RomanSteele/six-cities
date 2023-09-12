
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
  DataFetchReviews = 'data/fetchReviews',
  ActionPostReview = 'action/postReview'
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

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'];

  export const STARS= [
  {id:5,
    title: 'perfect'
  },
  {id:4,
    title: 'good'
  },
  {id:3,
    title: 'not bad'
  },
  {id:2,
    title: 'badly'
  },
  {id:1,
    title: 'terribly'
  },
];

