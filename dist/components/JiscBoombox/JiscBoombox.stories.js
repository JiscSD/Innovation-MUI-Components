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
export const Boombox1 = () => /*#__PURE__*/React.createElement(JiscBoombox, {
  backgroundImage: "https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg"
}, /*#__PURE__*/React.createElement(Typography, {
  variant: "h2"
}, "Jisc Boombox Example 3"), /*#__PURE__*/React.createElement(Typography, null, "Join our three-day online event and explore how to elevate the student experience during this challenging time"), /*#__PURE__*/React.createElement(JiscButton, null, "Click me"));
Boombox1.story = {
  name: 'JiscBoombox1'
};