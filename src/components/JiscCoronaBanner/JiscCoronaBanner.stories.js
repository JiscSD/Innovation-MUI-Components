import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscCoronaBanner from './index.jsx';

export default {
    component: JiscCoronaBanner,
    decorators: [withA11y],
    title: 'JiscCoronaBanner'
};

export const Banner = () => <JiscCoronaBanner />;

Banner.story = {
    name: 'CoronaBanner'
};
