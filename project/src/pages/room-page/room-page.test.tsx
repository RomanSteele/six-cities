import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import RoomPage from './room-page';
import {  fakeHotel, fakeHotelsArray, fakeReviews, fakeUserData } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';


const mockStore = configureMockStore();
const history = createMemoryHistory();
const mockHotels = fakeHotelsArray;
const mockHotel = fakeHotel;
const mockReviews = fakeReviews;
const mockUserData = fakeUserData;


describe('Component: RoomPage', () => {


  it('should render RoomPage logged in', async () => {

    const store = mockStore({
      DATA: { hotels: mockHotels, currentHotel: mockHotel, reviews: mockReviews, nearbyHotels: mockHotels },
      USER: { authorizationStatus: AuthorizationStatus.Authorized, userLoginData: mockUserData },
      ACTION: { isLoading: false },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <RoomPage  />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(new RegExp(`${mockHotel.title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockHotel.price}`, 'i'))).toBeInTheDocument();

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should render RoomPage logged out', async () => {

    const store = mockStore({
      DATA: { hotels: mockHotels, currentHotel: mockHotel, reviews: mockReviews, nearbyHotels: mockHotels },
      USER: { authorizationStatus: AuthorizationStatus.NotAuthorized, userLoginData: mockUserData },
      ACTION: { isLoading: false },
    });


    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <RoomPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(new RegExp(`${mockHotel.title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockHotel.price}`, 'i'))).toBeInTheDocument();

    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render Spinner because of loading status', async () => {

    const store = mockStore({
      DATA: { hotels: mockHotels, currentHotel: mockHotel, reviews: mockReviews, nearbyHotels: mockHotels },
      USER: { authorizationStatus: AuthorizationStatus.NotAuthorized, userLoginData: mockUserData },
      ACTION: { isLoading: true },
    });


    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <HelmetProvider>
            <RoomPage />
          </HelmetProvider>
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();

  });


});
