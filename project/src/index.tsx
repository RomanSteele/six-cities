
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorModalMessage from './components/error-modal-message/error-modal-message';
import browserHistory from './components/history-router/browser-history';
import HistoryRouter from './components/history-router/history-router';
import { store } from './store';
import { checkAuthorization } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(checkAuthorization())

root.render(
  <Provider store={store}>
    <ErrorModalMessage/>
    <HistoryRouter history={browserHistory}>
            <App />
    </HistoryRouter>
    </Provider>
);
