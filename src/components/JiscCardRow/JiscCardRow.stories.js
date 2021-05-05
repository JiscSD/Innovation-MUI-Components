import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscCardRow from './index.jsx';

export default {
    component: JiscCardRow,
    decorators: [withA11y],
    title: 'JiscCardRow'
};

export const JiscCardStandard = () => (
    <JiscCardRow
        exampleText='https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        cardTitle='Essay Feedback'
        cardText='Is scanning lawful? Sounds as if it ought to be a straightforward question with a simple answer. However investigating it turns out to be a good illustration of how tricky it is to apply real-world an….'
        cardCategory='version1'
    ></JiscCardRow>
);

export const JiscCardPadding = () => (
    <JiscCardRow
        exampleText='https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        cardTitle='Essay Feedback'
        cardText='Is scanning lawful? Sounds as if it ought to be a straightforward question with a simple answer. However investigating it turns out to be a good illustration of how tricky it is to apply real-world an….'
        cardCategory='version2'
    ></JiscCardRow>
);

export const JiscBigImageLeft = () => (
    <JiscCardRow
        exampleText='https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        cardTitle='Essay Feedback'
        cardText='Is scanning lawful? Sounds as if it ought to be a straightforward question with a simple answer. However investigating it turns out to be a good illustration of how tricky it is to apply real-world an….'
        cardCategory='version3'
    ></JiscCardRow>
);

export const JiscBigImageRight = () => (
    <JiscCardRow
        exampleText='https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        cardTitle='Essay Feedback'
        cardText='Is scanning lawful? Sounds as if it ought to be a straightforward question with a simple answer. However investigating it turns out to be a good illustration of how tricky it is to apply real-world an….'
        cardCategory='version4'
    ></JiscCardRow>
);
