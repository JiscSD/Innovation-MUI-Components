import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscAzureLogo from './index';

export default {
    title: 'JiscAzureLogo',
    decorators: [withA11y],
    component: JiscAzureLogo
};

export const Button1 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscAzureLogo />
    </div>
);

export const Button2 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscAzureLogo height='100px' />
    </div>
);
