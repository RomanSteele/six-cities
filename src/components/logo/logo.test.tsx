import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import Logo from './logo';


const history = createMemoryHistory();


describe('Component: Footer', () => {


  it('should render footer', async () => {

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <Logo />
        </HelmetProvider>
      </HistoryRouter>);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});
