import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Progress } from './Progress';

const meta = {
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  }
};
