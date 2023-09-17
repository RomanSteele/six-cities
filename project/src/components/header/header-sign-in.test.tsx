import { configureMockStore } from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { fakeUserData } from '../../utils/mocks';
import HistoryRouter from '../history-router/history-router';
import HeaderSignIn from './header-sign-in';

const mockUserData = fakeUserData;
const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  USER: {userLoginData: mockUserData, authorizationStatus: AuthorizationStatus.NotAuthorized},
});

describe('Component: HeaderSignIn', () => {

  it('should render sign In', async () => {

    render(
    <Provider store={store}>
      <HistoryRouter history={history}>
        <HeaderSignIn   />
      </HistoryRouter>
    </Provider>
    )

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
