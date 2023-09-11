import { store } from '../store';
import { setError } from '../store/slices/app-data/app-data';


export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
};
