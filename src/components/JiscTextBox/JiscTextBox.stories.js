import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import JiscTextBox from './index.jsx';
import { Typography, Link } from '@material-ui/core';

export default {
    title: 'JiscTextBox',
    decorators: [withA11y],
    component: JiscTextBox
};

const Para1 = 'We know that digital technology has the ability to transform education and research and are here to help you every step of the way.';

const Para2 = 'Your Jisc membership includes a connection to the superfast and secure Janet Network, significant savings on content and expert advice and guidance on digital technology for the sector.';

export const TextBox1 = () => <JiscTextBox paragraphs={[Para1, Para2, Para1, Para2]} imageUrl='https://www.jisc.ac.uk/sites/default/files/two-connected-workers-jisc-homepage_0.png' />;
TextBox1.story = {
    name: 'JiscTextBox1'
};
