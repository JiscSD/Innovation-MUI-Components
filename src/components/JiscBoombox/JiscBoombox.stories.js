import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';
import JiscBoombox from './index';
import JiscButton from '../JiscButton';
import jiscTheme from '../../theme';

export default {
    title: 'JiscBoombox',
    decorators: [withA11y],
    component: JiscBoombox
};

export const Boombox1 = () => (
    <JiscBoombox backgroundImage='https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg'>
        <Typography variant='h2'>Jisc Boombox Example 1</Typography>
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <JiscButton>Click me</JiscButton>
    </JiscBoombox>
);

export const Boombox2 = () => (
    <JiscBoombox backgroundImage='https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg'>
        <Typography variant='h2'>Jisc Boombox Example 2</Typography>
        <Typography>
            Join our three-day online event and explore how to elevate the student experience during this challenging
            time
        </Typography>
        <JiscButton style={{ marginTop: jiscTheme.spacing(3) }}>Click Here</JiscButton>
    </JiscBoombox>
);

Boombox1.story = {
    name: 'JiscBoombox1'
};

Boombox2.story = {
    name: 'JiscBoombox2'
};
