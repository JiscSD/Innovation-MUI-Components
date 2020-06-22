import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscButton from './index.jsx';

export default {
  title: 'JiscButton',
  decorators: [withA11y],
  component: JiscButton,
};

export const Button1 = () => <JiscButton outline='primary'>Click Me</JiscButton>

export const Button2 = () => <div style={{
  backgroundColor: 'grey',
  padding: '4rem'
}}>
  <JiscButton>Click Me</JiscButton>
</div>


Button1.story = {
  name: 'JiscButton1',
};