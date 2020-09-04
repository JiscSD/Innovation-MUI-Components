import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import jiscTheme from '../../theme.js';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '1.25rem'
    }
}));

const JiscH2 = ({ children }) => {
    const classes = useStyles();
    return (
        <Typography variant='h2' gutterBottom className={classes.root}>
            {children}
        </Typography>
    );
};

JiscH2.propTypes = {
    children: PropTypes.node.isRequired
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscH2 {...props} />
        </ThemeProvider>
    );
};
