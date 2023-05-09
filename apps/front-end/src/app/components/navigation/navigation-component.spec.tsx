import { render } from '@testing-library/react';

import NavigationComponent from './navigation-component';

describe('NavigationComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationComponent />);
    expect(baseElement).toBeTruthy();
  });
});
