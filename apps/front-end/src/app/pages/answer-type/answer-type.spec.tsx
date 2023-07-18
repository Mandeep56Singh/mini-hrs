import { render } from '@testing-library/react';

import AnswerType from './answer-type';

describe('AnswerType', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnswerType />);
    expect(baseElement).toBeTruthy();
  });
});
