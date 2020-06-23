import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscTextBox from './index.jsx';
import { Typography, Link } from '@material-ui/core';
export default {
  title: 'JiscTextBox',
  decorators: [withA11y],
  component: JiscTextBox
};
export const TextBox1 = () => /*#__PURE__*/React.createElement(JiscTextBox, {
  imageUrl: "https://www.jisc.ac.uk/sites/default/files/two-connected-workers-jisc-homepage_0.png"
}, /*#__PURE__*/React.createElement(Typography, {
  variant: "h2"
}, "Title"), /*#__PURE__*/React.createElement(Typography, null, "We know that digital technology has the ability to transform education and research and are here to help you every step of the way."), /*#__PURE__*/React.createElement(Typography, null, "Your Jisc membership includes a connection to the ", /*#__PURE__*/React.createElement(Link, {
  href: "http://google.com"
}, "To Google"), " superfast and secure Janet Network, significant savings on content and expert advice and guidance on digital technology for the sector."));
TextBox1.story = {
  name: 'JiscTextBox1'
};