import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import CardsList from './cards-list';
import { fakeHotelsArray } from '../../utils/mocks';
import { AuthorizationStatus, CardsListType } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const history = createMemoryHistory();

const mockMovies = fakeHotelsArray

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Authorized, },
})

describe('Component: CardsList', () => {


  it('should render hotels list', async () => {

    render(
      <Provider store={store}>
      <HistoryRouter history={history}>
          <CardsList properties={mockMovies} listType={CardsListType[0].title} />
      </HistoryRouter>
      </Provider>
    );


    expect(screen.getByText(new RegExp(`${mockMovies[0].title}`,'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockMovies[1].title}`,'i'))).toBeInTheDocument();
  });


});
