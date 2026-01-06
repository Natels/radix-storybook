import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Progress } from './Progress';

const meta = {
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    fillColor: { control: 'color' },
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    backgroundColor: "#000000",
    fillColor: "#000000"
  }
};
