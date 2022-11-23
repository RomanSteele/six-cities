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
  UserLogin = 'user/login',
  UserLogout = 'user/logout',
}

export enum APIRoute {
  Properties = '/hotels',
  Property = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
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
