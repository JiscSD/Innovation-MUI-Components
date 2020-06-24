import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';
import JiscFeatureBox from './index';

export default {
    title: 'JiscFeatureBox',
    decorators: [withA11y],
    component: JiscFeatureBox
};

export const FeatureBox1 = () => (
    <JiscFeatureBox
        backgroundImage='https://innovation-components-images.s3-eu-west-1.amazonaws.com/landscape/credit_card_inform.jpg'
        backgroundColor='blue'
        color='white'
        imageHeight='400px'
    >
        <Typography variant='h2'>Four steps to better online delivery: the South West College story</Typography>
    </JiscFeatureBox>
);

FeatureBox1.story = {
    name: 'Feature Box 1'
};
