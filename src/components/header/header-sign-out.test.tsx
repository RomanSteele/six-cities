import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { fakeUserData } from '../../utils/mocks';
import HistoryRouter from '../history-router/history-router';
import HeaderSignOut from './header-sign-out';

const mockUserData = fakeUserData;
const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  USER: { userLoginData: mockUserData, authorizationStatus: AuthorizationStatus.Authorized },
});

describe('Component: HeaderSignOut', () => {

  it('should render sign out', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HeaderSignOut data={mockUserData} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
