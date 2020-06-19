import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscBoombox from './index.jsx';
import JiscButton from './../JiscButton';

export default {
  title: 'JiscBoombox',
  decorators: [withA11y],
  component: JiscBoombox,
};

export const Boombox1 = () => <JiscBoombox title='Jisc Boombox Example' backgroundImage='https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg'/>;
export const Boombox2 = () => <JiscBoombox title='Jisc Boombox Example 2' backgroundColor='#333'/>;
export const Boombox3 = () => <JiscBoombox 
    title='Jisc Boombox Example 3'
    content='Join our three-day online event and explore how to elevate the student experience during this challenging time' 
    backgroundImage='https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg'
/>;

Boombox1.story = {
  name: 'JiscBoombox1',
};

Boombox2.story = {
    name: 'JiscBoombox2',
};

Boombox3.story = {
    name: 'JiscBoombox3',
};