import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscTitleBanner from './index.jsx';

export default {
    component: JiscTitleBanner,
    decorators: [withA11y],
    title: 'JiscTitleBanner'
};

export const Banner1 = () => <JiscTitleBanner title='Text Analytics' />;

Banner1.story = {
    name: 'JiscTitleBanner1'
};

export const Banner2 = () => <JiscTitleBanner title='Jisc Live Chat' backgroundColor='blue' />;

Banner2.story = {
    name: 'JiscTitleBanner2'
};

export const Banner3 = () => <JiscTitleBanner title='Jisc Live Chat' color='orange' backgroundColor='white' />;

Banner3.story = {
    name: 'JiscTitleBanner3'
};
