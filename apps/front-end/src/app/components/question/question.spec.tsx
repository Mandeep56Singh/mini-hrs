import { render } from '@testing-library/react';

import QuestionList from './question-list';

describe('Question', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuestionList questions={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
