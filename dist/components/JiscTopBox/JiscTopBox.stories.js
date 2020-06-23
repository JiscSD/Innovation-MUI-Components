import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscTopBox from './index.jsx';
import { Typography } from '@material-ui/core';
export default {
  title: 'JiscTopBox',
  decorators: [withA11y],
  component: JiscTopBox
};
export const TopBox1 = () => /*#__PURE__*/React.createElement(JiscTopBox, {
  leftImage: "https://www.jisc.ac.uk/sites/default/files/node-transparent-8d1558.png",
  rightImage: "https://www.jisc.ac.uk/sites/default/files/connectivity-hero.jpg"
}, /*#__PURE__*/React.createElement(Typography, {
  variant: "h2"
}, "Cyber security"), /*#__PURE__*/React.createElement(Typography, null, "To help you get the most from your Jisc membership, we work to protect the Janet Network and connected organisations"));
TopBox1.story = {
  name: 'JiscTopBox1'
};