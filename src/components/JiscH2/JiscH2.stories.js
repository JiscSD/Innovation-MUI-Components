import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscH2 from './index';

export default {
    component: JiscH2,
    decorators: [withA11y],
    title: 'JiscH2'
};

export const Heading1 = () => (
    <div>
        <JiscH2>How we use cookies</JiscH2>
    </div>
);
