import type { Meta, StoryObj } from '@storybook/react';
import CompanyOverview from './CompanyOverview';

const meta: Meta<typeof CompanyOverview> = {
    component: CompanyOverview,
};
export default meta;

type Story = StoryObj<typeof CompanyOverview>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Simple: Story = {};
