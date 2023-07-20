import { render } from '@testing-library/react';

import FormBuilder from './form-builder';

describe('FormBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
