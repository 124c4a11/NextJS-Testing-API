import { render, screen } from '@testing-library/react';

import { Button } from '..';


describe('Button', () => {
  it('is rendering', () => {
    render(<Button>My Button</Button>);

    expect(screen.getByRole('button', { name: 'My Button' })).toBeInTheDocument();
  })
});
