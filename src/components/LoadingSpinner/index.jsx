import React from 'react';
import { makeStyles, ThemeProvider, Grid, Container } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ backgroundColor, color }) =>
    makeStyles((theme) => ({
        root: {
            marginTop: '2rem',
            marginBottom: '2rem',
            backgroundColor: theme.palette.jisc[backgroundColor] || 'white',
            color: theme.palette.jisc[color] || 'black'
        }
    }));

const LoadingSpinner = ({ title, backgroundColor, color }) => {
    const classes = useStyles(backgroundColor, color);
};
