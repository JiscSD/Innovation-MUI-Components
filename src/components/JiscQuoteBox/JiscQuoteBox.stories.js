import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscQuoteBox from './index.jsx';

export default {
    component: JiscQuoteBox,
    decorators: [withA11y],
    title: 'JiscQuoteBox'
};

export const QuoteBox1 = () => <JiscQuoteBox text='Hello, this is the first Jisc Quote Box with default colors' />;

export const QuoteBox2 = () => <JiscQuoteBox color='blue' text='Hello, and welcome to the Jisc Quote Box 2' />;
