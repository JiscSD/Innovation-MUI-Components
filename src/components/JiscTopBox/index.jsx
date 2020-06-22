import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme.js';

import { makeStyles, Typography, ThemeProvider, Grid } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const useStyles = ({ leftImage, rightImage, leftBackgroundColor, rightBackgroundColor }) =>
    makeStyles((theme) => ({
        containerLeft: {
            backgroundImage: leftImage && `url(${leftImage})`,
            backgroundColor: leftBackgroundColor,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: 'white',
            padding: '10rem 8rem',
            [breakpoints.down('xs')]: {
                padding: '1rem'
            }
        },
        containerRight: {
            backgroundImage: rightImage && `url(${rightImage})`,
            backgroundColor: rightBackgroundColor,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }));

const JiscImageBanner = ({ title, content, leftImage, rightImage, leftBackgroundColor, rightBackgroundColor }) => {
    const classes = useStyles({
        leftImage,
        rightImage,
        leftBackgroundColor,
        rightBackgroundColor
    })();

    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.root}>
                <Grid item md={6} xs={12} className={classes.containerLeft}>
                    <Typography variant='h2'>{title}</Typography>
                    <Typography variant='body1'>{content}</Typography>
                </Grid>
                <Grid item md={6} className={classes.containerRight}></Grid>
            </Grid>
        </ThemeProvider>
    );
};

JiscImageBanner.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    leftImage: PropTypes.string,
    leftBackgroundColor: PropTypes.string,
    rightImage: PropTypes.string,
    rightBackgroundColor: PropTypes.string
};

JiscImageBanner.defaultProps = {
    title: 'Jisc',
    content: 'Content goes here...'
};

export default (props) => {
    return (
        <ThemeProvider theme={theme}>
            <JiscImageBanner {...props} />
        </ThemeProvider>
    );
};
