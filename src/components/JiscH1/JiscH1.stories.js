import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscH1 from './index';

export default {
    component: JiscH1,
    decorators: [withA11y],
    title: 'JiscH1'
};

export const Heading1 = () => (
    <div>
        <JiscH1>Accessibility Statement</JiscH1>
    </div>
);
