import React from 'react';
import { makeStyles, ThemeProvider, Grid, Container, Typography } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ color }) =>
    makeStyles((theme) => ({
        root: {
            padding: theme.spacing(6),
            backgroundColor: theme.palette.background.quote,
            borderRight: `3px solid ${theme.palette.jisc[color] || theme.palette.jisc.orange}`,
            color: theme.palette.jisc[color] || theme.palette.jisc.orange
        }
    }));

const JiscQuoteBox = ({ color, text }) => {
    const classes = useStyles({ color })();
    return (
        <ThemeProvider theme={jiscTheme}>
            <Container maxWidth='md' className={classes.root}>
                <Typography component='p' variant='h3'>
                    {text}
                </Typography>
            </Container>
        </ThemeProvider>
    );
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscQuoteBox {...props} />
        </ThemeProvider>
    );
};
