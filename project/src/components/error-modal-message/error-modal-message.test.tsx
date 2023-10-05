import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import ErrorModalMessage from './error-modal-message';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  DATA: { error: '404' },
});


describe('Component: ErrorModalMessage', () => {
  it('should render error message and close button', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ErrorModalMessage />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Close/i)).toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();

  });
});
