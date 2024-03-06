import type { Meta } from '@storybook/react';
import React from 'react';

import { Button } from '../components';

const meta = {
  title: 'Components/Button',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const Component = () => {
  return <Button>button</Button>;
};

export const Button_ = {
  render: () => <Component></Component>,
};
