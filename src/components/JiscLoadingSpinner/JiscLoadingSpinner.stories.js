import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscLoadingSpinner from './index.jsx';

export default {
    component: JiscLoadingSpinner,
    decorators: [withA11y],
    title: 'JiscLoadingSpinner'
};

export const LoadingSpinner1 = () => <JiscLoadingSpinner title='Analysing Images' colour='orange' />;

LoadingSpinner1.story = {
    name: 'JiscLoadingSpinner 1'
};
