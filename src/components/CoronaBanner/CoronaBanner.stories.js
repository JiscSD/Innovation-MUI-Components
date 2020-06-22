import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import CoronaBanner from './index.jsx';

export default {
    title: 'CoronaBanner',
    decorators: [withA11y],
    component: CoronaBanner
};

export const Banner = () => <CoronaBanner />;

Banner.story = {
    name: 'CoronaBanner'
};
