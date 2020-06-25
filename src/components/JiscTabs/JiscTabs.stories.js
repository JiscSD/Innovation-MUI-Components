import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';
import JiscTab from './../JiscTab';

import JiscTabs from './index';

export default {
    title: 'JiscTabs',
    decorators: [withA11y],
    component: JiscTabs
};

export const Tabs1 = () => (
    <JiscTabs>
        <JiscTab />
    </JiscTabs>
);
