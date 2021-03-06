import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography, Link } from '@material-ui/core';
import JiscInfoBox from './index.jsx';

export default {
    component: JiscInfoBox,
    decorators: [withA11y],
    title: 'JiscInfoBox'
};

export const InfoBox1 = () => (
    <JiscInfoBox imageUrl='https://www.jisc.ac.uk/sites/default/files/two-connected-workers-jisc-homepage_0.png'>
        <Typography variant='h2'> Your trusted partner in edtech</Typography>
        <br />
        <Typography>
            We know that digital technology has the ability to transform education and research and are here to help you
            every step of the way.
        </Typography>
        <br />
        <Typography>
            Your Jisc membership includes a connection to the superfast and secure{' '}
            <Link href='https://components.ai.alpha.jisc.ac.uk'>Janet Network</Link>, significant{' '}
            <Link href='https://components.ai.alpha.jisc.ac.uk'>savings on content</Link> and expert{' '}
            <Link href='https://components.ai.alpha.jisc.ac.uk'>advice and guidance</Link> on digital technology for the
            sector.
        </Typography>
    </JiscInfoBox>
);

InfoBox1.story = {
    name: 'JiscInfoBox default'
};

export const InfoBox2 = () => (
    <JiscInfoBox
        imageUrl='https://innovation-components-images.s3-eu-west-1.amazonaws.com/humaaans/connectivity-services-needs.png'
        color='blue'
        backgroundColor='white'
    >
        <Typography variant='h2'>This is how a title should look!</Typography>
        <br />
        <Typography>
            We know that digital technology has the ability to transform education and research and are here to help you
            every step of the way.
        </Typography>
        <br />
        <Typography>
            Your Jisc membership includes a connection to the <Link href='http://google.com'>To Google</Link> superfast
            and secure Janet Network, significant savings on content and expert advice and guidance on digital
            technology for the sector.
        </Typography>
    </JiscInfoBox>
);
InfoBox2.story = {
    name: 'JiscInfoBox non-default colours'
};

export const InfoBox3 = () => (
    <JiscInfoBox
        imageUrl='https://innovation-components-images.s3-eu-west-1.amazonaws.com/humaaans/connectivity-services-needs.png'
        imagePosition='left'
        backgroundColor='blue'
        color='white'
    >
        <Typography variant='h2'>This is how a title should look!</Typography>
        <br />
        <Typography>
            We know that digital technology has the ability to transform education and research and are here to help you
            every step of the way.
        </Typography>
        <br />
        <Typography>
            Your Jisc membership includes a connection to the <Link href='http://google.com'>To Google</Link> superfast
            and secure Janet Network, significant savings on content and expert advice and guidance on digital
            technology for the sector.
        </Typography>
    </JiscInfoBox>
);

InfoBox3.story = {
    name: 'JiscInfoBox left image'
};
