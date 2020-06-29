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
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            paddingRight: theme.spacing(4),
            [breakpoints.down('md')]: {
                padding: theme.spacing(8)
            },
            [breakpoints.down('sm')]: {
                padding: theme.spacing(8)
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
                <Grid container>
                    <Grid item lg={4} xl={5}></Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={7}>
                        {children}
                    </Grid>
                </Grid>
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
