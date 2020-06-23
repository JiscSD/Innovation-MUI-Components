import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscBoombox from './index.jsx';
import JiscButton from './../JiscButton';
import { Typography } from '@material-ui/core';

export default {
    title: 'JiscBoombox',
    decorators: [withA11y],
    component: JiscBoombox
};

export const Boombox1 = () => (
    <JiscBoombox backgroundImage='https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg'>
        <Typography variant='h2'>Jisc Boombox Example 3</Typography>
        <Typography>Join our three-day online event and explore how to elevate the student experience during this challenging time</Typography>
        <JiscButton>Click me</JiscButton>
    </JiscBoombox>
);

Boombox1.story = {
    name: 'JiscBoombox1'
};
