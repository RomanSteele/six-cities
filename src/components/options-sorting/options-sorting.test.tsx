import { render, screen } from '@testing-library/react';
import OptionsSorting from './options-sorting';
import { SortingOptions, startSortCity } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';


const mockStore = configureMockStore();

const store = mockStore({
  ACTION: { isCurrentSortCity: startSortCity, isCurrentSortingOption: SortingOptions[0] },
});

describe('Component: OptionsSorting', () => {


  it('should render Sorting list', async () => {


    render(
      <Provider store={store}>

        <OptionsSorting />

      </Provider>,
    );


    expect(screen.getByText(new RegExp(`${SortingOptions[2]}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();

  });

});
