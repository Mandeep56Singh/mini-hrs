import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import LoginPage from './login';

import { BrowserRouter } from 'react-router-dom';


describe('Login Page tests', ()=>{

it('login page',()=>{

  expect(1).toBe(1);
});

it('should render login form', ()=>{
    render (
      <BrowserRouter>
         <LoginPage />
      </BrowserRouter>);
});

});