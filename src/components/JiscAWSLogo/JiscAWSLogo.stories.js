import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscAWSLogo from './index';

export default {
    title: 'JiscAWSLogo',
    decorators: [withA11y],
    component: JiscAWSLogo
};

export const AWSLogo1 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscAWSLogo />
    </div>
);

export const AWSLogo2 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscAWSLogo height='100px' />
    </div>
);

AWSLogo1.story = {
    name: 'AWS Logo default'
};

AWSLogo2.story = {
    name: 'AWS Logo large'
};
