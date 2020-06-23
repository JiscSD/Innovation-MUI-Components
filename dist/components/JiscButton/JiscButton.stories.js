import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscButton from './index.jsx';
export default {
  title: 'JiscButton',
  decorators: [withA11y],
  component: JiscButton
};
export const Button1 = () => /*#__PURE__*/React.createElement("div", {
  style: {
    padding: '4rem'
  }
}, /*#__PURE__*/React.createElement(JiscButton, {
  outline: "primary"
}, "Click Me"));
export const Button2 = () => /*#__PURE__*/React.createElement("div", {
  style: {
    backgroundColor: 'grey',
    padding: '4rem'
  }
}, /*#__PURE__*/React.createElement(JiscButton, null, "Click Me"));
Button1.story = {
  name: 'JiscButton1'
};
Button2.story = {
  name: 'JiscButton2'
};