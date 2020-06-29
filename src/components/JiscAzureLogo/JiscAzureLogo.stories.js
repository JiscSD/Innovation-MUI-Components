import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscAzureLogo from './index';

export default {
    title: 'JiscAzureLogo',
    decorators: [withA11y],
    component: JiscAzureLogo
};

export const AzureLogo1 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscAzureLogo />
    </div>
);

export const AzureLogo2 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscAzureLogo height='100px' />
    </div>
);
