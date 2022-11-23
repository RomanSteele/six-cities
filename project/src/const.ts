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
  DataFetchChosenProperty = 'data/fetchChosenProperty'
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
/*
export const chosenProperty = {
  Paris: {
    Lat: 48.85661,
    Lng: 2.351499,
  },
  Cologne: {
    Lat: 50.938361,
    Lng: 6.959974,
  },
  Brussels: {
    Lat: 50.846557,
    Lng: 4.351697,
  },
  Amsterdam: {
    Lat: 52.37454,
    Lng: 4.897976,
  },
  Hamburg: {
    Lat: 53.550341,
    Lng: 10.000654,
  },
  Dusseldorf: {
    Lat: 51.225402,
    Lng: 6.776314,
  }
};
*/
