import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscActionHeader from './index.jsx';
import JiscButton from '../JiscButton/index.jsx';

export default {
    component: JiscActionHeader,
    decorators: [withA11y],
    title: 'JiscLoginHeader'
};

export const ActionHeader1 = () => (
    <JiscActionHeader title='JiscLoginHeader Example' color='white' backgroundColor='indigo'>
        <JiscButton>Login</JiscButton>
    </JiscActionHeader>
);

ActionHeader1.story = {
    name: 'JiscActionHeader 1'
};
