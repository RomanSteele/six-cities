import {render, screen} from '@testing-library/react';
import PremiumBadge from './premium-badge';

describe('Component: PremiumBadge', () => {


  it('should render premium badge', async () => {

    render(
            <PremiumBadge />
    );

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });


});
