import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-router/history-router';
import { AuthorizationStatus, AppRoute, startSortCity, SortingOptions } from '../../const';
import App from './app';
import { fakeHotel, fakeHotelsArray, fakeReviews, fakeUserData } from '../../utils/mocks';

import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();

const mockHotel = fakeHotel;
const mockHotelsArray = fakeHotelsArray;
const mockReviews = fakeReviews;

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Authorized, userLoginData: fakeUserData },
  DATA: { hotels: mockHotelsArray, favoriteHotels: [mockHotel], currentHotel: mockHotel, nearbyHotels: mockHotelsArray, reviews: mockReviews },
  ACTION: { isLoading: false, isCurrentSortCity: startSortCity, isCurrentSortingOption: SortingOptions[0] },
});

const storeNoAuth = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.NotAuthorized, userLoginData: fakeUserData },
  DATA: { movies: mockHotelsArray },
  ACTION: { isLoading: false },
});

const history = createMemoryHistory();


const testApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);


describe('Application Routing', () => {


  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Main);

    render(testApp);

    expect(screen.getByText(/1 place to stay in Paris/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockHotelsArray[0].title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${fakeUserData.email}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render "RoomPage" when user navigate to "/hotels/:id"', async () => {
    history.push(AppRoute.Room.replace(':id', '1'));


    render(testApp);


    const elementWithText = screen.getAllByText(new RegExp(`${mockHotel.rating}`, 'i'));
    expect(elementWithText).not.toBeNull();
    expect(screen.getByText(/Sign Out/i)).toBeInTheDocument();
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByText(new RegExp(`${mockHotel.rating}`, 'i')));
  });

  it('should render "NotFoundPage" when user navigate to "*"', async () => {
    history.push(`/${AppRoute.NotFound}`);


    render(testApp);

    expect(screen.getByText(/NOT FOUND!/i)).toBeInTheDocument();

  });


  it('should render "FavoritesPage" when user navigate to "/favorites"', async () => {
    history.push(AppRoute.Favorites);

    render(testApp);

    expect(screen.getByText(/Saved Listing/i)).toBeInTheDocument();
    // eslint-disable-next-line jest/valid-expect
    expect(screen.getByText(new RegExp(`${mockHotel.title}`, 'i')));
  });


  it('should render "SignInPage" when user navigate to "/favorites signed out"', async () => {
    history.push(AppRoute.Favorites);

    render(
      <Provider store={storeNoAuth}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>,
    );

    const elementWithText = screen.getAllByText(/Sign in/i);
    expect(elementWithText).not.toBeNull();
    screen.getByTestId('user-email');
    screen.getByTestId('user-password');
  });


  it('should render "SignInPage" when user navigate to "/login"', async () => {
    history.push(AppRoute.Login);

    render(
      <Provider store={storeNoAuth}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>);

    await userEvent.type(screen.getByTestId('user-email'), 'email@email.com');
    await userEvent.type(screen.getByTestId('user-password'), '1242645');

    const elementWithText = screen.getAllByText(/Sign in/i);
    expect(elementWithText).not.toBeNull();
    expect(screen.getByDisplayValue(/email@email.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/1242645/i)).toBeInTheDocument();
  });

  it('should render "Main" when user navigate to "/login signed in"', async () => {
    history.push(AppRoute.Login);

    render(testApp);

    expect(screen.getByText(/1 place to stay in Paris/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockHotelsArray[0].title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${fakeUserData.email}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });


});
