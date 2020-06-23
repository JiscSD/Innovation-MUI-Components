import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import ExamplePage from './index.jsx';
export default {
  title: 'ExamplePage',
  decorators: [withA11y],
  component: ExamplePage
};
export const ExamplePage1 = () => /*#__PURE__*/React.createElement(ExamplePage, null);