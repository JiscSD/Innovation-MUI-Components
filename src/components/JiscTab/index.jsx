import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Grid, Tabs, Tab, TabPanel } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import jiscTheme from '../../theme';

const JiscTab = (props) => (
    <React.Fragment>
        <Tab label='Item One' />
        <TabPanel index={0}>Item One</TabPanel>
    </React.Fragment>
);

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscTab {...props} />
        </ThemeProvider>
    );
};
