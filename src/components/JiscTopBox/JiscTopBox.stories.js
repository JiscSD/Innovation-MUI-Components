import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography, Link } from '@material-ui/core';

import JiscTopBox from './index.jsx';
import JiscInfoBox from './../JiscInfoBox';

export default {
    title: 'JiscTopBox',
    decorators: [withA11y],
    component: JiscTopBox
};

export const TopBox1 = () => (
    <>
        <JiscTopBox
            leftImage='https://www.jisc.ac.uk/sites/default/files/node-transparent-8d1558.png'
            rightImage='https://www.jisc.ac.uk/sites/default/files/connectivity-hero.jpg'
        >
            <Typography variant='h2'>Cyber security</Typography>
            <br />
            <Typography>
                To help you get the most from your Jisc membership, we work to protect the Janet Network and connected
                organisations
            </Typography>
            <br />
            <Typography>
                To help you get the most from your Jisc membership, we work to protect the Janet Network and connected
                organisations
            </Typography>
        </JiscTopBox>
        <JiscInfoBox imageUrl='https://innovation-components-images.s3-eu-west-1.amazonaws.com/humaaans/connectivity-services-needs.png'>
            <Typography variant='h2'>This is how a title should look!</Typography>
            <br />
            <Typography>
                We know that digital technology has the ability to transform education and research and are here to help
                you every step of the way.
            </Typography>
            <br />
            <Typography>
                Your Jisc membership includes a connection to the <Link href='http://google.com'>To Google</Link>{' '}
                superfast and secure Janet Network, significant savings on content and expert advice and guidance on
                digital technology for the sector.
            </Typography>
        </JiscInfoBox>
    </>
);

export const TopBox2 = () => (
    <JiscTopBox
        leftBackgroundColor='white'
        color='blue'
        rightImage='https://innovation-components-images.s3-eu-west-1.amazonaws.com/abstract/analytics-abstract-inform.jpg'
    >
        <Typography variant='h2'>Cyber security</Typography>
        <Typography>
            To help you get the most from your Jisc membership, we work to protect the Janet Network and connected
            organisations
        </Typography>
    </JiscTopBox>
);
