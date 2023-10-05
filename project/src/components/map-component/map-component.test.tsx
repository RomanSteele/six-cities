import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import MapComponent from './map-component';
import { fakeHotelsArray } from '../../utils/mocks';
import { AuthorizationStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

const history = createMemoryHistory();

const mockHotels = fakeHotelsArray;

const mockStore = configureMockStore();

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Authorized },
});

describe('Component: MapComponent', () => {


  it('should render map component', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MapComponent properties={mockHotels} size={{ height: '100', width: '100' }} type={'cities'}/>
        </HistoryRouter>
      </Provider>,
    );


    expect(screen.getByTestId('leaflet-map')).toBeInTheDocument();
  });


});
