import { render, screen } from '@testing-library/react';
import FavoritesListEmpty from './favorites-list-empty';

describe('Component: FavoritesList', () => {


  it('should render favorite hotels list', async () => {

    render(
      <FavoritesListEmpty />,
    );

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });


});
