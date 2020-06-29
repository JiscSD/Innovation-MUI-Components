import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Container, Typography } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ color }) =>
    makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.background.quote,
            borderRight: `6px solid ${theme.palette.jisc[color] || theme.palette.jisc.orange}`,
            color: theme.palette.jisc[color] || theme.palette.jisc.orange,
            padding: theme.spacing(6)
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

JiscQuoteBox.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired
};

JiscQuoteBox.defaultProps = {
    color: 'orange'
};
export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscQuoteBox {...props} />
        </ThemeProvider>
    );
};
