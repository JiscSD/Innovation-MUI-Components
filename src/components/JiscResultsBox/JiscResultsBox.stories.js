import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscResultsBox from './index.jsx';

export default {
    component: JiscResultsBox,
    decorators: [withA11y],
    title: 'JiscResultsBox'
};

export const PositiveResult = () => (
    <JiscResultsBox
        exampleText='Is scanning lawful? Sounds as if it ought to be a straightforward question with a simple answer. However investigating it turns out to be a good illustration of how tricky it is to apply real-world an….'
        cardCategory='positive'
        exampleTextType='Essay Feedback'
    >
    </JiscResultsBox>
);

export const DefaultResult = () => (
    <JiscResultsBox
        exampleText='Is scanning lawful? Sounds as if it ought to be a straightforward question with a simple answer. However investigating it turns out to be a good illustration of how tricky it is to apply real-world an….'
        cardCategory='neutral'
        exampleTextType='Essay Feedback'
    >
    </JiscResultsBox>
);

export const NegativeResult = () => (
    <JiscResultsBox
        exampleText='Is scanning lawful? Sounds as if it ought to be a straightforward question with a simple answer. However investigating it turns out to be a good illustration of how tricky it is to apply real-world an….'
        cardCategory='negative'
        exampleTextType='Essay Feedback'
    >
    </JiscResultsBox>
);




