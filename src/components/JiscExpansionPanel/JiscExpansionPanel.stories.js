import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography, Link } from '@material-ui/core';
import JiscExpansionPanel from './index';

export default {
    title: 'JiscExpansionPanel',
    decorators: [withA11y],
    component: JiscExpansionPanel
};

export const ExpansionPanel1 = () => (
    <div
        style={{
            backgroundColor: 'white',
            padding: '4rem'
        }}
    >
        <JiscExpansionPanel title={'Free access for FE and HE organisations until 31 July 2020'} titleColor='orange'>
            <Typography>
                During this time of unprecedented challenge, Jisc is extending access to Journal Archives and Historical
                Texts for the delivery of content for research and study to all UK HE and FE institutions.
            </Typography>
            <Typography>
                We hope to assist libraries in supporting their users by providing the widest possible range of
                materials relevant to their work, accessible from wherever they need to be.
            </Typography>
        </JiscExpansionPanel>
    </div>
);

ExpansionPanel1.story = {
    name: 'JiscExpansionPanel1'
};
