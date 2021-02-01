import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscIBMLogo from './index.jsx';

export default {
    component: JiscIBMLogo,
    decorators: [withA11y],
    title: 'JiscIBMLogo'
};

export const IBMLogo1 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscIBMLogo />
    </div>
);

export const IBMLogo2 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscIBMLogo height='100px' />
    </div>
);
