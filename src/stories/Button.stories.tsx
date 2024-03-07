import type { Meta } from '@storybook/react';
import React from 'react';

const { Button } = require('@/components');

const meta = {
  title: 'Components/Button',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

export const Button_ = {
  render: () => <Button>Button</Button>,
};
