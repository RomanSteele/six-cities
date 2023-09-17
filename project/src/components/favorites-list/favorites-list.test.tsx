import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import FavoritesList from './favorites-list';
import { fakeHotelsArray } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const history = createMemoryHistory();

const mockMovies = fakeHotelsArray

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Authorized,},
})

describe('Component: FavoritesList', () => {


  it('should render favorite hotels list', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
            <FavoritesList properties={mockMovies} />
        </HistoryRouter>
      </Provider>
    );


    expect(screen.getByText(new RegExp(`${mockMovies[0].title}`,'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockMovies[1].title}`,'i'))).toBeInTheDocument();
  });


});
