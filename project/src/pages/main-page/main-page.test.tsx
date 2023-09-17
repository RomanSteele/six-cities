import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import MainPage from './main-page';
import { fakeHotelsArray, fakeUserData } from '../../utils/mocks';
import { AuthorizationStatus, SortingOptions, startSortCity } from '../../const';



const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockHotels = fakeHotelsArray;
const mockUserData = fakeUserData;


describe('Component: MainPage', () => {


  it('should render MainPage logged in', async () => {

    const store = mockStore({
      DATA: {hotels: mockHotels},
      USER: {authorizationStatus: AuthorizationStatus.Authorized, userLoginData: mockUserData},
      ACTION: {isLoading: false,isCurrentSortCity: startSortCity, isCurrentSortingOption:SortingOptions[0]}
    });

    render(
    <Provider store={store}>
      <HistoryRouter history={history}>
          <MainPage />
      </HistoryRouter>
    </Provider>
    );


    expect(screen.getByText(new RegExp(`${mockHotels[0].title}`,'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockHotels[0].type}`,'i'))).toBeInTheDocument();

    expect(screen.getByText(new RegExp(`${mockUserData.email}`,'i'))).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });


  it('should render MainPage logged out', async () => {

    const store = mockStore({
      DATA: {hotels: mockHotels},
      USER: {authorizationStatus: AuthorizationStatus.NotAuthorized, userLoginData: mockUserData},
      ACTION: {isLoading: false,isCurrentSortCity: startSortCity, isCurrentSortingOption:SortingOptions[0]}
    });

    render(
    <Provider store={store}>
      <HistoryRouter history={history}>
          <MainPage  />
      </HistoryRouter>
    </Provider>
    );


    expect(screen.getByText(new RegExp(`${mockHotels[0].title}`,'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockHotels[0].title}`,'i'))).toBeInTheDocument();

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });


  it('should render Spinner becuase of loading status', async () => {

    const store = mockStore({
      DATA: {hotels: []},
      USER: {authorizationStatus: AuthorizationStatus.NotAuthorized},
      ACTION: {isLoading: true, isCurrentSortCity: startSortCity, isCurrentSortingOption:SortingOptions[0]}
    });

    render(
    <Provider store={store}>
      <HistoryRouter history={history}>
          <MainPage  />
      </HistoryRouter>
    </Provider>
    );


    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

});
