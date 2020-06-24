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
        backgroundImage='https://innovation-components-images.s3-eu-west-1.amazonaws.com/people/affordable_end_user_security_testing_1.jpg'
        backgroundColor='pink'
        color='white'
        imageHeight='400px'
    >
        <Typography variant='h2'>Four steps to better online delivery: the South West College story</Typography>
    </JiscFeatureBox>
);

FeatureBox1.story = {
    name: 'Feature Box 1'
};
