import { store } from '../store/index';
import { Property } from './property';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Data = {
  properties: Property[];
  chosenProperty: Property;
};

export type Action = {
  city: string;
  sortOrder: string;
}

export type User = {
  authorizationStatus: boolean;
}
