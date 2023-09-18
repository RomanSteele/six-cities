import { Cities, SortingOptions, startSortCity } from '../../../const';
import { actionData, changeLoadingStatus, updateCurrentSortCity, updateIsFavorite, updateSortingOption } from './action-data';


const initialState = {
  isFavorite: false,
  isLoading: false,
  isCurrentSortCity: startSortCity,
  isCurrentSortingOption: SortingOptions[0]
};


describe('Reducer: actionData', () => {


const loadingStatusChange = false;
const favoriteStatusChange =true;

  it('without additional parameters should return initial state', () => {
    expect(actionData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should change isFavorite to true', () => {
    const state = initialState;
    expect(actionData.reducer(state, updateIsFavorite(favoriteStatusChange)))
    .toEqual({ ...initialState, isFavorite: favoriteStatusChange });
  });

  it('should change isLoading to false', () => {
    const state = initialState;
    expect(actionData.reducer(state, changeLoadingStatus(loadingStatusChange)))
    .toEqual({ ...initialState, isLoading: loadingStatusChange });
  });

  it('should change isCurrentSortCity to new', () => {
    const state = initialState;
    expect(actionData.reducer(state, updateCurrentSortCity(Cities[2])))
    .toEqual({ ...initialState, isCurrentSortCity: Cities[2] });
  });

  it('should change isCurrentSortingOption to new', () => {
    const state = initialState;
    expect(actionData.reducer(state, updateSortingOption(SortingOptions[1])))
    .toEqual({ ...initialState, isCurrentSortingOption: SortingOptions[1] });
  });


});
