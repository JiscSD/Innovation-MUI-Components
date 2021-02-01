import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscGoogleLogo from './index.jsx';

export default {
    component: JiscGoogleLogo,
    decorators: [withA11y],
    title: 'JiscGoogleLogo'
};

export const GoogleLogo1 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscGoogleLogo />
    </div>
);

export const GoogleLogo2 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscGoogleLogo height='100px' />
    </div>
);
