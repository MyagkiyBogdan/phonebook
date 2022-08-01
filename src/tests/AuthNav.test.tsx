import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { AuthNav } from 'components/AppBar/AuthNav';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';

import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('AuthNav', () => {
  test('Router test', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <AuthNav />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const loginLink = screen.getByTestId('login-link');
    const registerLink = screen.getByTestId('register-link');
    expect(loginLink).toBeInTheDocument();
    userEvent.click(loginLink);
    expect(screen.getByTestId('signIn-title')).toBeInTheDocument();
    userEvent.click(registerLink);
    expect(screen.getByTestId('register-title')).toBeInTheDocument();
  });
});
