import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';
import JiscExpansionPanel from './index.jsx';

export default {
    component: JiscExpansionPanel,
    decorators: [withA11y],
    title: 'JiscExpansionPanel'
};

export const ExpansionPanel1 = () => (
    <div
        style={{
            backgroundColor: 'white',
            padding: '4rem'
        }}
    >
        <JiscExpansionPanel title='Free access for FE and HE organisations until 31 July 2020'>
            <Typography>
                During this time of unprecedented challenge, Jisc is extending access to Journal Archives and Historical
                Texts for the delivery of content for research and study to all UK HE and FE institutions.
            </Typography>
            <Typography>
                We hope to assist libraries in supporting their users by providing the widest possible range of
                materials relevant to their work, accessible from wherever they need to be.
            </Typography>
        </JiscExpansionPanel>
        <JiscExpansionPanel title='Free access for FE and HE organisations until 31 July 2020'>
            <Typography>
                During this time of unprecedented challenge, Jisc is extending access to Journal Archives and Historical
                Texts for the delivery of content for research and study to all UK HE and FE institutions.
            </Typography>
            <Typography>
                We hope to assist libraries in supporting their users by providing the widest possible range of
                materials relevant to their work, accessible from wherever they need to be.
            </Typography>
        </JiscExpansionPanel>
        <JiscExpansionPanel title='Free access for FE and HE organisations until 31 July 2020'>
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
