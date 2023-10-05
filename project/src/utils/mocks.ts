import { name, internet, datatype } from 'faker';
import { AuthorizationStatus } from '../const';
import { Property } from '../types/property';
import { Review } from '../types/review';
import { UserLogin, UserLoginDataResponse } from '../types/user-login-data';

export const fakeId = 2;

export const fakeError = ['Error!', null ];

export const fakeEmail: Array<string> = ['ousekf@kjsenf.com', 'wefwfwe@fsefsd.c'];

export const fakePassword: Array<string> = ['ousekf2346477658', ''];

export const fakeAuthStatus: Array<string> = [AuthorizationStatus.Unknown, AuthorizationStatus.Authorized, AuthorizationStatus.NotAuthorized];

export const fakeFavoriteStatusChange: { id: number, status: number } = {
  id: 2,
  status: 1,
};

export const fakeUserData: UserLoginDataResponse = {
  avatarUrl: internet.avatar(),
  email: 'fseq31233@gmail.com',
  id: 0,
  name: name.title(),
  token: datatype.string(20),
};

export const fakeLoginUserData: UserLogin = {
  email: 'asekjw@kwjef.com',
  password: 'string',
};

export const fakeUserReview = {
  id: datatype.number({ min: 1 }),
  comment: datatype.string(20),
  rating: datatype.number({ min: 1 }),
};

export const fakeReviews: Review[] = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': 'Sun Sep 17 2023 12:08:29 GMT+0200 (Восточная Европа, стандартное время)',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'img/1.png',
      'id': 1,
      'isPro': false,
      'name': 'Oliver.conner',
    },
  },
  {
    'comment': 'gdrdrdrdrdrdrdrdrind a a river by the unique lightness of Amsterdam.',
    'date': 'Sun Sep 15 2023 12:05:29 GMT+0200 (Восточная Европа, стандартное время)',
    'id': 2,
    'rating': 2,
    'user': {
      'avatarUrl': 'img/2.png',
      'id': 3,
      'isPro': false,
      'name': 'John.Connor',
    },
  },
];

export const fakeHotelsArray: Property[] = [
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13 } },
    previewImage: 'https://9.react.pages.academy/static/hotel/7.jpg',
    images: [
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg'],
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 257,
    goods: [
      'Baby seat',
      'Laptop friendly workspace',
      'Fridge',
      'Air conditioning',
      'Towels',
      'Dishwasher',
      'Breakfast',
      'Washer'],
    host: {
      id: 25,
      name:
          'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg' },
    description: 'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
    location: {
      latitude: 48.877610000000004,
      longitude: 2.333499,
      zoom: 16 },
    id: 25,
  },

  { city:
    {
      name: 'Cologne',
      location:
    { latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    } },
  previewImage: 'https://9.react.pages.academy/static/hotel/13.jpg',
  images:
      ['https://9.react.pages.academy/static/hotel/19.jpg',
        'https://9.react.pages.academy/static/hotel/20.jpg',
        'https://9.react.pages.academy/static/hotel/17.jpg',
        'https://9.react.pages.academy/static/hotel/14.jpg',
        'https://9.react.pages.academy/static/hotel/13.jpg',
        'https://9.react.pages.academy/static/hotel/18.jpg',
        'https://9.react.pages.academy/static/hotel/11.jpg',
        'https://9.react.pages.academy/static/hotel/3.jpg',
        'https://9.react.pages.academy/static/hotel/10.jpg',
        'https://9.react.pages.academy/static/hotel/15.jpg',
        'https://9.react.pages.academy/static/hotel/2.jpg',
        'https://9.react.pages.academy/static/hotel/12.jpg',
        'https://9.react.pages.academy/static/hotel/16.jpg',
        'https://9.react.pages.academy/static/hotel/9.jpg',
      ],
  title: 'Canal View Prinsengracht',
  isFavorite: false,
  isPremium: false,
  rating: 3.3,
  type: 'house',
  bedrooms: 3,
  maxAdults: 7,
  price: 837,
  goods:
      ['Laptop friendly workspace',
      ],
  host:
      { 'id': 25,
        name: 'Angelina',
        isPro: true,
        avatarUrl: 'img/avatar-angelina.jpg',
      },
  description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
  location:
    { latitude: 50.945361,
      longitude: 6.935974,
      zoom: 16 },
  id: 1,
  },

  { city:
    { name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      } },
  previewImage: 'https://9.react.pages.academy/static/hotel/14.jpg',
  images:
    ['https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
    ],
  title: 'Perfectly located Castro',
  isFavorite: false,
  isPremium: false,
  rating: 4.2,
  type: 'house',
  bedrooms: 1,
  maxAdults: 10,
  price: 879,
  goods: ['Towels',
    'Washing machine',
    'Fridge',
    'Baby seat',
    'Cable TV',
    'Coffee machine',
    'Dishwasher',
    'Breakfast',
    'Laptop friendly workspace',
    'Washer',
    'Air conditioning',
  ],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  location: {
    latitude: 53.555341000000006,
    longitude: 9.975654,
    zoom: 16 },
  id: 2 },

  { city:
    { name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13 } },
  previewImage: 'https://9.react.pages.academy/static/hotel/1.jpg',
  images:
    ['https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
    ],
  title: 'The Joshua Tree House',
  isFavorite: false,
  isPremium: true,
  rating: 4.3,
  type: 'hotel',
  bedrooms: 1,
  maxAdults: 6,
  price: 315,
  goods: [
    'Air conditioning',
    'Laptop friendly workspace',
    'Breakfast',
    'Washer'],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!', 'location': {
    latitude: 50.960361,
    longitude: 6.967974,
    zoom: 16 },
  id: 3 },
];

export const fakeHotel: Property = {
  city: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13 } },
  previewImage:
      'https://9.react.pages.academy/static/hotel/13.jpg',
  images:
      ['https://9.react.pages.academy/static/hotel/8.jpg',
        'https://9.react.pages.academy/static/hotel/13.jpg',
        'https://9.react.pages.academy/static/hotel/18.jpg',
        'https://9.react.pages.academy/static/hotel/10.jpg',
        'https://9.react.pages.academy/static/hotel/17.jpg',
        'https://9.react.pages.academy/static/hotel/20.jpg',
        'https://9.react.pages.academy/static/hotel/9.jpg',
        'https://9.react.pages.academy/static/hotel/1.jpg',
        'https://9.react.pages.academy/static/hotel/2.jpg',
        'https://9.react.pages.academy/static/hotel/12.jpg',
        'https://9.react.pages.academy/static/hotel/16.jpg',
        'https://9.react.pages.academy/static/hotel/6.jpg',
        'https://9.react.pages.academy/static/hotel/19.jpg',
        'https://9.react.pages.academy/static/hotel/7.jpg'],
  title: 'Wood and stone place',
  isFavorite: false,
  isPremium: false,
  rating: 2.9,
  type: 'room',
  bedrooms: 1,
  maxAdults: 2,
  price: 165,
  goods: [
    'Laptop friendly workspace',
    'Air conditioning',
    'Breakfast',
    'Baby seat',
    'Towels',
    'Fridge',
    'Washer'],
  host: {
    id: 25,
    name: 'Angelina',
    isPro: true,
    avatarUrl: 'img/avatar-angelina.jpg',
  },
  description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
  location: {
    latitude: 50.833557,
    longitude: 4.374696999999999,
    zoom: 16,
  },
  id: 20 };
