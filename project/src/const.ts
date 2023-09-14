
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
  Reviews ='/comments/:id',
  Login='/login',
  Logout='/logout',
  Favorite='/favorite',
  FavoriteChange = '/favorite/:id/:status',
  NearbyHotels = '/hotels/:id/nearby'
}

export enum APIType {
  DataFetchHotels = 'data/fetchHotels',
  DataFetchFavoriteHotels = 'data/fetchFavoriteHotels',
  DataFetchNearbyHotels = 'data/fetchNearbyHotels',
  DataFetchRoom = 'data/fetchRoom',
  DataFetchReviews = 'data/fetchReviews',
  ActionPostReview = 'action/postReview',
  UserPostLogin = 'user/login',
  UserPostLogout = 'user/logout'
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
  'Dusseldorf'
];

  export const SortingOptions =[
   'Popular',
   'Price: low to high',
   'Price: high to low',
   'Top rated first',
  ]


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

export const MainMapSize = {height: '568.600px', width: '512px'}

export const RoomMapSize = {height: '579px', width: '1153.450px'}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
