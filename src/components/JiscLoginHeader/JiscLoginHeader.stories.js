import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscLoginHeader from './index';

export default {
    title: 'JiscLoginHeader',
    decorators: [withA11y],
    component: JiscLoginHeader
};

export const LoginHeader1 = () => <JiscLoginHeader title='JiscLoginHeader Example' />;

LoginHeader1.story = {
    name: 'JiscLoginHeader 1'
};

export const LoginHeader2 = () => (
    <JiscLoginHeader title='JiscLoginHeader Example' color='white' backgroundColor='indigo' buttonColor='white' />
);

LoginHeader2.story = {
    name: 'JiscLoginHeader 2'
};
