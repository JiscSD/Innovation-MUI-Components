import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import TitleBanner from './index';

export default {
    title: 'TitleBanner',
    decorators: [withA11y],
    component: TitleBanner
};

export const Banner1 = () => <TitleBanner title='Text Analytics' />;

Banner1.story = {
    name: 'TitleBanner1'
};

export const Banner2 = () => <TitleBanner title='Jisc Live Chat' />;

Banner2.story = {
    name: 'TitleBanner2'
};
