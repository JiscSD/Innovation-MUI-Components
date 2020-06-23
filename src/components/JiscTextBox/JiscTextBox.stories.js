import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography, Link } from '@material-ui/core';
import JiscTextBox from './index';

export default {
    title: 'JiscTextBox',
    decorators: [withA11y],
    component: JiscTextBox
};

export const TextBox1 = () => (
    <JiscTextBox imageUrl='https://www.jisc.ac.uk/sites/default/files/two-connected-workers-jisc-homepage_0.png'>
        <Typography variant='h2'>Title</Typography>
        <Typography>
            We know that digital technology has the ability to transform education and research and are here to help you
            every step of the way.
        </Typography>
        <Typography>
            Your Jisc membership includes a connection to the <Link href='http://google.com'>To Google</Link> superfast
            and secure Janet Network, significant savings on content and expert advice and guidance on digital
            technology for the sector.
        </Typography>
    </JiscTextBox>
);
TextBox1.story = {
    name: 'JiscTextBox1'
};
