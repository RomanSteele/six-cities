export enum AppRoute {
  Main = '/',
  Login = '/login',
  Property = '/property',
  Favorites = '/favorites',
}

export enum NameSpace {
  Data = 'DATA',
  Action = 'ACTION',
  User = 'USER',
}

export enum ApiType {
  DataFetchProperties = 'data/fetchProperties',
}

export enum APIRoute {
  Properties = '/hotels',
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
