import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography, Link } from '@material-ui/core';
import JiscQuoteBox from './index';

export default {
    title: 'JiscQuoteBox',
    decorators: [withA11y],
    component: JiscQuoteBox
};

export const QuoteBox1 = () => (
    <JiscQuoteBox>
        <Typography variant='h2'>Hello, this is the first Jisc Quote Box with default colors</Typography>
    </JiscQuoteBox>
);

export const QuoteBox2 = () => (
    <JiscQuoteBox color='blue'>
        <Typography variant='h2'>Hello, and welcome to the Jisc Quote Box 2</Typography>
    </JiscQuoteBox>
);
