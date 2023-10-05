import { render, screen } from '@testing-library/react';


import CitiesSorting from './cities-sorting';
import { Cities, startSortCity } from '../../const';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';


const mockStore = configureMockStore();

const store = mockStore({
  ACTION: { isCurrentSortCity: startSortCity },
});

describe('Component: CitiesSorting', () => {


  it('should render Sorting tabs', async () => {


    render(
      <Provider store={store}>

        <CitiesSorting />

      </Provider>,
    );


    expect(screen.getByText(new RegExp(`${Cities[0]}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${Cities[2]}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${Cities[4]}`, 'i'))).toBeInTheDocument();

  });

});
