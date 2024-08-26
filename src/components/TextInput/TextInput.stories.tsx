import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'TextInput',
    component: TextInput,
    tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
