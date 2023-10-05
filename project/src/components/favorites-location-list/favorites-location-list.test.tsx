import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import FavoritesLocationList from './favorites-location-list';
import { fakeHotelsArray } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const history = createMemoryHistory();

const mockMovies = fakeHotelsArray;

const mockStore = configureMockStore();

const mockItems = [...new Set(mockMovies.map((item)=>item.city.name))];

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Authorized },
});

describe('Component: FavoritesLocationList', () => {


  it('should render favorite location list', async () => {


    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesLocationList properties={mockMovies} items={mockItems} />
        </HistoryRouter>
      </Provider>,
    );


    expect(screen.getByText(new RegExp(`${mockMovies[0].title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockMovies[0].city.name}`, 'i'))).toBeInTheDocument();

    expect(screen.getByText(new RegExp(`${mockMovies[1].title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockMovies[1].city.name}`, 'i'))).toBeInTheDocument();
  });


});
