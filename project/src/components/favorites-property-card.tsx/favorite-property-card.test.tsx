import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import FavoritesPropertyCard from './favorites-property-card';
import { fakeHotel, fakeHotelsArray } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';


const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockMovie = fakeHotel;
const mockMovieArray = fakeHotelsArray;

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Authorized },
  DATA: { favoriteHotels: mockMovieArray },
});


describe('Component: FavoritePropertyCard', () => {


  it('should render favorite property card', async () => {

    render (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesPropertyCard  property={mockMovie} />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(new RegExp(`${mockMovie.title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockMovie.type}`, 'i'))).toBeInTheDocument();
  });


});
