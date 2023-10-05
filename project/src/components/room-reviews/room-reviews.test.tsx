import { render, screen } from '@testing-library/react';
import RoomReviews from './room-reviews';
import { fakeId, fakeReviews } from '../../utils/mocks';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';

const mockReviews = fakeReviews;
const mockId = fakeId;
const mockStore = configureMockStore();

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Authorized },
  ACTION: { isLoading: false },
});

describe('Component: RoomReviews', () => {

  it('should render reviews', async () => {

    render(
      <Provider store={store}>
        <RoomReviews reviews={mockReviews} hotelId={mockId} />
      </Provider>,

    );

    expect(screen.getByText(new RegExp(`${mockReviews[0].comment}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${mockReviews[1].comment}`, 'i'))).toBeInTheDocument();
  });


});


