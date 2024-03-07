import { render, screen } from '@testing-library/react';
import React from 'react';

const { Button } = require('@/components');

test('', async () => {
  render(<Button>Button</Button>);
  await screen.findAllByText(/Button/);
});
