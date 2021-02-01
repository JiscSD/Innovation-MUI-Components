import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import jiscTheme from '../../theme.js';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '1.6875rem'
    }
}));

const JiscH1 = ({ children }) => {
    const classes = useStyles();
    return (
        <Typography variant='h1' gutterBottom className={classes.root}>
            {children}
        </Typography>
    );
};

JiscH1.propTypes = {
    children: PropTypes.node.isRequired
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscH1 {...props} />
        </ThemeProvider>
    );
};
