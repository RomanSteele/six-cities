import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import SignInPage from './sign-in-page';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: SignInPage', () => {

  it('should render SignInPage', async () => {

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <SignInPage />
        </HelmetProvider>
      </HistoryRouter>,
    );


    const elementWithText = screen.getAllByText(/Sign in/i);

    expect(elementWithText).not.toBeNull();
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it('should render SignInPage with entered email and password', async () => {

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <SignInPage />
        </HelmetProvider>
      </HistoryRouter>,
    );


    await userEvent.type(screen.getByTestId('user-email'), 'email@email.com');
    await userEvent.type(screen.getByTestId('user-password'), '1242645');

    const elementWithText = screen.getAllByText(/Sign in/i);

    expect(elementWithText).not.toBeNull();
    expect(screen.getByDisplayValue(/email@email.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/1242645/i)).toBeInTheDocument();
  });


  it('should render SignInPage with empty email or password error', async () => {

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <SignInPage />
        </HelmetProvider>
      </HistoryRouter>,
    );

    const postButton = screen.getByTestId('test-button');

    await userEvent.click(postButton);

    expect(screen.getByText(/Wrong email or password!/i)).toBeInTheDocument();
  });


});
