import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Grid, Tabs } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import jiscTheme from '../../theme';

const JiscTabs = (props) => <Tabs {...props} />;

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscTabs {...props} />
        </ThemeProvider>
    );
};
