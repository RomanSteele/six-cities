import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import SinglePropertyCard from './single-property-card';
import { fakeHotel, fakeHotelsArray } from '../../utils/mocks';
import { AuthorizationStatus, CardsListType } from '../../const';


const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockMovie = fakeHotel;
const mockMovieArray = fakeHotelsArray;

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Authorized },
  DATA: { favoriteHotels: mockMovieArray },
});


describe('Component: SinglePropertyCard', () => {


  it('should render single property card', async () => {

    render (
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SinglePropertyCard  property={mockMovie} listType={CardsListType[0].title} />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(new RegExp(`${mockMovie.title}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockMovie.type}`, 'i'))).toBeInTheDocument();
  });


});
