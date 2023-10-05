import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { fakeUserData } from '../../utils/mocks';
import HistoryRouter from '../history-router/history-router';
import Spinner from './spinner';

const mockStore = configureMockStore();
const mockUserData = fakeUserData;
const history = createMemoryHistory();

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Authorized, userLoginData: mockUserData },
});

describe('Component: Spinner', () => {

  it('should render spinner', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Spinner loading />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

});
