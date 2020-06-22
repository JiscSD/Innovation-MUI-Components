import React from 'react';
import PropTypes from 'prop-types';
import theme from './../../theme.js';

import { makeStyles, Button, ThemeProvider } from '@material-ui/core';

const useStyles = ({ outline }) => makeStyles((theme) => ({
    button: {
        color: outline === 'primary' ? theme.palette.primary.main : 'white',
        textPrimary: 'primary',
        borderColor: outline === 'primary' ? theme.palette.primary.main : 'white',
        '&:hover': {
            color: 'white',
            borderColor: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main
        }
    }
}));

const JiscButton = (props) => {

    const classes = useStyles(props)();

    return (
        <ThemeProvider theme={theme}>
            <Button variant="outlined" className={classes.button} {...props}></Button>
        </ThemeProvider>
    );
};

export default (props) => {
    return(
        <ThemeProvider theme={theme}>
            <JiscButton {...props} />
        </ThemeProvider>
    );
};