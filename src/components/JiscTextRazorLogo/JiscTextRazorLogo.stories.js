import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscTextRazorLogo from './index.jsx';

export default {
    component: JiscTextRazorLogo,
    decorators: [withA11y],
    title: 'JiscTextRazorLogo'
};

export const TextRazorLogo1 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscTextRazorLogo />
    </div>
);

export const TextRazorLogo2 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscTextRazorLogo height='100px' />
    </div>
);
