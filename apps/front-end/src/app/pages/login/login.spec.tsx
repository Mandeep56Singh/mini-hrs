import { describe, it, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginPage from './login';

import { BrowserRouter } from 'react-router-dom';

describe('Login Page: ', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
  });

  it('should show Log In header', () => {
    const headerElement = screen.getByText(/Log In/);
    expect(headerElement).toBeDefined();
  });

  it('should load login form and its elements', async () => {
    const loginFormElement = screen.getByTestId('login-form');
    const userNameElement = screen.getByLabelText(/Username/);
    const passwordElement = screen.getByLabelText(/Password/);
    const loginBtnElement = screen.getByRole('button', { name: /Login/i });
    const signUpLinkElement = screen.getByRole('link', {
      name: /Signup instead/,
    });
    expect(loginFormElement).toBeTruthy();
    expect(userNameElement).toBeDefined();
    expect(passwordElement).toBeDefined();
    expect(loginBtnElement).toBeDefined();
    expect(signUpLinkElement).toBeDefined();
  });
  it('should fill correct username value', async () => {
    const mockUsernameValue = 'testusername';
    const userNameElement: HTMLInputElement = screen.getByLabelText(/Username/);
    fireEvent.change(userNameElement, { target: { value: mockUsernameValue } });
    expect(userNameElement.value).toBe(mockUsernameValue);
  });
  it('should fill correct pasword value', async () => {
    const mockpasswordValue = 'testpassword';
    const userNameElement: HTMLInputElement = screen.getByLabelText(/Password/);
    fireEvent.change(userNameElement, { target: { value: mockpasswordValue } });
    expect(userNameElement.value).toBe(mockpasswordValue);
  });
});
