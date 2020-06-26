import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscActionHeader from './index';
import JiscButton from '../JiscButton';

export default {
    title: 'JiscLoginHeader',
    decorators: [withA11y],
    component: JiscActionHeader
};

export const ActionHeader1 = () => (
    <JiscActionHeader title='JiscLoginHeader Example' color='white' backgroundColor='indigo'>
        <JiscButton>Login</JiscButton>
    </JiscActionHeader>
);

ActionHeader1.story = {
    name: 'JiscActionHeader 1'
};
