import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import Header from './header';
import { fakeUserData } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';

const mockUserData = fakeUserData;
const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Authorized, userLoginData: mockUserData },
});

const store1 = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.NotAuthorized },
});


describe('Component: Header', () => {


  it('should render Sign Out becuase of Authorized status', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render Sign in becuase of NotAuthorized status', async () => {

    render(
      <Provider store={store1}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

});
