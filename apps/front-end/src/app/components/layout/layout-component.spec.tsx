import { render } from '@testing-library/react';

import LayoutComponent from './layout-component';

describe('LayoutComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutComponent />);
    expect(baseElement).toBeTruthy();
  });
});
