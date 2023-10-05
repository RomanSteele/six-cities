import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../history-router/history-router';
import ReviewForm from './review-form';
import { fakeId } from '../../utils/mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  ACTION: { isLoading: false },
});

const mockId= fakeId;

describe('Component: ReviewForm', () => {

  it('should render review form', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm hotelId={mockId} />
        </HistoryRouter>
      </Provider>);

    await userEvent.type(screen.getByTestId('review-text'), 'review');
    const elementWithText = screen.getAllByText(/Rating/i);

    expect(elementWithText).not.toBeNull();
    expect(screen.getByDisplayValue(/review/i)).toBeInTheDocument();

  });
});
