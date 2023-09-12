import { Middleware } from 'redux';
import browserHistory from '../../components/history-router/browser-history';
import { rootReducer } from '../root-reducer';



type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer>=
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'data/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
