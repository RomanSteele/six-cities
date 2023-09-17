import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { fakeHotel } from '../../utils/mocks';
import HistoryRouter from '../history-router/history-router';
import MainEmptyList from './main-empty-list';

const history = createMemoryHistory();

const mockCityname = fakeHotel.city.name;

describe('Component: MainEmtpyList', () => {


  it('should render main empty list with city name', async () => {

    render(
      <HistoryRouter history={history}>
            <MainEmptyList cityName={mockCityname} />
            </HistoryRouter>
    );
    expect(screen.getByText(/We could not find any property available at the moment in/i)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockCityname}`,'i'))).toBeInTheDocument();
  });


});
