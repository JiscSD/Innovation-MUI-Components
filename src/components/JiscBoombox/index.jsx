import React from 'react';
import PropTypes from 'prop-types';
import theme from './../../theme.js';

import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import JiscButton from './../JiscButton';

const breakpoints = createBreakpoints({});

const useStyles = ({ backgroundColor, backgroundImage }) => makeStyles((theme) => ({
    root: {
        backgroundColor: backgroundColor || theme.palette.background.banner,
        backgroundImage: `url(${backgroundImage})` || '',
        padding: '3rem 12rem',
        textAlign: 'center',
        color: 'white'
    },
    text: {
        margin: '1rem 0'
    }
}));

const JiscBoombox = ({ title, content, backgroundColor, backgroundImage }) => {

    const classes = useStyles({ backgroundColor, backgroundImage })();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Typography variant='h2' className={classes.text}>
                    {title}
                </Typography>
                <Typography variant='body1' className={classes.text}>
                    {content}
                </Typography>
            </div>
        </ThemeProvider>
    );
};



JiscBoombox.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string
};

JiscBoombox.defaultProps = {
    title: 'Jisc',
};

export default (props) => {
    return(
        <ThemeProvider theme={theme}>
            <JiscBoombox {...props} />
        </ThemeProvider>
    );
};