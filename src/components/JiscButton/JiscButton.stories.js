import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscButton from './index';

export default {
    component: JiscButton,
    decorators: [withA11y],
    title: 'JiscButton'
};

export const Button1 = () => (
    <div
        style={{
            backgroundColor: 'grey',
            padding: '4rem'
        }}
    >
        <JiscButton>Click Me</JiscButton>
    </div>
);

export const Button2 = () => (
    <div
        style={{
            padding: '4rem'
        }}
    >
        <JiscButton color='orange' selectedBackgroundColor='darkGrey'>
            Click Me
        </JiscButton>
    </div>
);

export const Button3 = () => (
    <div
        style={{
            backgroundColor: 'white',
            padding: '4rem'
        }}
    >
        <JiscButton backgroundColor='indigo' color='white'>
            Click Me
        </JiscButton>
    </div>
);

export const Button4 = () => (
    <div
        style={{
            backgroundColor: 'white',
            padding: '4rem'
        }}
    >
        <JiscButton backgroundColor='indigo' color='white' selected>
            Click Me
        </JiscButton>
    </div>
);

export const Button5 = () => (
    <div
        style={{
            backgroundColor: 'white',
            padding: '4rem'
        }}
    >
        <JiscButton backgroundColor='indigo' color='white' selectedBackgroundColor='maroon' selectedTextColor='orange'>
            Click Me
        </JiscButton>
    </div>
);

Button1.story = {
    name: 'JiscButton1'
};

Button2.story = {
    name: 'JiscButton2'
};

Button3.story = {
    name: 'JiscButton3'
};

Button4.story = {
    name: 'JiscButton4'
};

Button5.story = {
    name: 'JiscButton5'
};
