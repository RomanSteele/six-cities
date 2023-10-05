import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import FavoritesPage from './favorites-page';
import { fakeHotelsArray, fakeUserData } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';


const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockHotels =fakeHotelsArray;
const mockUserData = fakeUserData;


describe('Component: FarotitesPage', () => {


  it('should render FarotitesPage logged in', async () => {

    const store = mockStore({
      DATA: { favoriteHotels: mockHotels },
      USER: { authorizationStatus: AuthorizationStatus.Authorized, userLoginData: mockUserData },
      ACTION: { isLoading: false },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <FavoritesPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(new RegExp(`${mockHotels[0].title}`, 'i'))).toBeInTheDocument();

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });


  it('should render FarotitesPage logged in with no favorite hotels', async () => {

    const store = mockStore({
      DATA: { favoriteHotels: [] },
      USER: { authorizationStatus: AuthorizationStatus.Authorized, userLoginData: mockUserData },
      ACTION: { isLoading: false },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <FavoritesPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );


    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });


});
