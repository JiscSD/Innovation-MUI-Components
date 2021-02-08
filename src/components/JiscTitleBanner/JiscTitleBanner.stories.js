import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';
import JiscTitleBanner from './index.jsx';

export default {
    component: JiscTitleBanner,
    decorators: [withA11y],
    title: 'JiscTitleBanner'
};

export const Banner1 = () => (
    <JiscTitleBanner>
        <Typography variant='h2' variantMapping={{ h2: 'h1' }}>
            Explore AI
        </Typography>
    </JiscTitleBanner>
);

Banner1.story = {
    name: 'JiscTitleBanner1'
};

export const Banner2 = () => (
    <JiscTitleBanner backgroundColor='blue'>
        <Typography variant='h1'>Jisc Live Chat</Typography>
    </JiscTitleBanner>
);

Banner2.story = {
    name: 'JiscTitleBanner2'
};

export const Banner3 = () => (
    <JiscTitleBanner color='orange' backgroundColor='white'>
        <Typography variant='h1'>Explore AI</Typography>
    </JiscTitleBanner>
);

Banner3.story = {
    name: 'JiscTitleBanner3'
};
