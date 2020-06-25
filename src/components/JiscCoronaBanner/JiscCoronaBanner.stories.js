import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscCoronaBanner from './index';

export default {
    title: 'JiscCoronaBanner',
    decorators: [withA11y],
    component: JiscCoronaBanner
};

export const Banner = () => <JiscCoronaBanner />;

Banner.story = {
    name: 'CoronaBanner'
};
