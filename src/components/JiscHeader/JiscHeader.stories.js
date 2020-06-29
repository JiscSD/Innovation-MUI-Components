import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscHeader from './index.jsx';

export default {
    component: JiscHeader,
    decorators: [withA11y],
    title: 'JiscHeader'
};

export const Header = () => <JiscHeader title='Jisc Header Example' />;

Header.story = {
    name: 'JiscHeader'
};
