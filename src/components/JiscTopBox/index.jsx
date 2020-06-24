import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Grid } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import jiscTheme from '../../theme';

const breakpoints = createBreakpoints({});

const useStyles = ({ leftImage, rightImage, leftBackgroundColor, rightBackgroundColor, color }) =>
    makeStyles((theme) => ({
        containerLeft: {
            backgroundImage: leftImage && `url(${leftImage})`,
            backgroundColor: theme.palette.jisc[leftBackgroundColor],
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: theme.palette.jisc[color] || 'white',
            padding: '10rem 8rem',
            [breakpoints.down('xs')]: {
                padding: '1rem'
            }
        },
        containerRight: {
            backgroundImage: rightImage && `url(${rightImage})`,
            backgroundColor: theme.palette.jisc[rightBackgroundColor],
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }));

const JiscImageBanner = ({ leftImage, rightImage, leftBackgroundColor, rightBackgroundColor, color, children }) => {
    const classes = useStyles({
        leftImage,
        rightImage,
        leftBackgroundColor,
        rightBackgroundColor,
        color
    })();

    return (
        <Grid container className={classes.root}>
            <Grid item md={6} xs={12} className={classes.containerLeft}>
                {children}
            </Grid>
            <Grid item md={6} className={classes.containerRight} />
        </Grid>
    );
};

JiscImageBanner.propTypes = {
    leftImage: PropTypes.string,
    leftBackgroundColor: PropTypes.string,
    rightImage: PropTypes.string,
    rightBackgroundColor: PropTypes.string
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscImageBanner {...props} />
        </ThemeProvider>
    );
};
