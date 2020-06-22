import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscBanner from './index.jsx';

export default {
    title: 'JiscBanner',
    decorators: [withA11y],
    component: JiscBanner
};

export const Banner = () => <JiscBanner title='Jisc Banner Example' />;

Banner.story = {
    name: 'JiscBanner'
};
