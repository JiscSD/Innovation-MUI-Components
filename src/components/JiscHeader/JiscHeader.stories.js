import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscHeader from './index';

export default {
    title: 'JiscHeader',
    decorators: [withA11y],
    component: JiscHeader
};

export const Header = () => <JiscHeader title='Jisc Header Example' />;

Header.story = {
    name: 'JiscHeader'
};
