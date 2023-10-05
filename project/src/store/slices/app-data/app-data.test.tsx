import { initialProperty } from '../../../helpers';
import { AppData } from '../../../types/state';
import { fakeError, fakeHotel, fakeHotelsArray, fakeReviews } from '../../../utils/mocks';
import { appData, loadCurrentHotel, loadFavoriteHotels, loadHotels, loadNearbyHotels, loadReviews, setError } from './app-data';


const mockHotels = fakeHotelsArray;
const mockReviews = fakeReviews;
const mockHotel = fakeHotel;
const mockError = fakeError;


describe('Reducer: appData', () => {

  const initialState: AppData = {
    hotels: [],
    currentHotel: initialProperty,
    nearbyHotels: [initialProperty],
    favoriteHotels: [],
    reviews: [],
    error: null,
  };


  it('without additional parameters should return initial state', () => {
    expect(appData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should change hotels in initialState', () => {
    expect(appData.reducer(initialState, loadHotels(mockHotels)))
      .toEqual({ ...initialState, hotels: mockHotels });
  });

  it('should change currentHotel in initialState', () => {
    expect(appData.reducer(initialState, loadCurrentHotel(mockHotel)))
      .toEqual({ ...initialState, currentHotel: mockHotel });
  });

  it('should change nearbyHotels in initialState', () => {
    expect(appData.reducer(initialState, loadNearbyHotels(mockHotels)))
      .toEqual({ ...initialState, nearbyHotels: mockHotels });
  });

  it('should change favoriteHotels in initialState', () => {
    expect(appData.reducer(initialState, loadFavoriteHotels(mockHotels)))
      .toEqual({ ...initialState, favoriteHotels: mockHotels });
  });

  it('should change reviews in initialState', () => {
    expect(appData.reducer(initialState, loadReviews(mockReviews)))
      .toEqual({ ...initialState, reviews: mockReviews });
  });

  it('should not change error in initialState', () => {
    expect(appData.reducer(initialState, setError(mockError[1])))
      .toEqual({ ...initialState });
  });
});

