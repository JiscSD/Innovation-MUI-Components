import React from 'react';
import PropTypes from 'prop-types';

import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { Grid, ThemeProvider, makeStyles } from '@material-ui/core';
import jiscTheme from '../../theme.js';

const breakpoints = createBreakpoints({});

const useStyles = ({ leftImage, rightImage, leftBackgroundColor, rightBackgroundColor, color }) =>
    makeStyles((theme) => ({
        containerLeft: {
            backgroundColor: theme.palette.jisc[leftBackgroundColor],
            backgroundImage: leftImage && `url(${leftImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: theme.palette.jisc[color] || 'white',
            paddingBottom: theme.spacing(10),
            paddingRight: theme.spacing(4),
            paddingTop: theme.spacing(10),
            [breakpoints.down('md')]: {
                padding: theme.spacing(8)
            },
            [breakpoints.down('sm')]: {
                padding: theme.spacing(8)
            }
        },
        containerRight: {
            backgroundColor: theme.palette.jisc[rightBackgroundColor],
            backgroundImage: rightImage && `url(${rightImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
    }));

const JiscImageBanner = ({ leftImage, rightImage, leftBackgroundColor, rightBackgroundColor, color, children }) => {
    const classes = useStyles({
        color,
        leftBackgroundColor,
        leftImage,
        rightBackgroundColor,
        rightImage
    })();

    return (
        <Grid container className={classes.root}>
            <Grid item md={6} xs={12} className={classes.containerLeft}>
                <Grid container>
                    <Grid item lg={4} xl={5} />
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
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    leftBackgroundColor: PropTypes.string,
    leftImage: PropTypes.string,
    rightBackgroundColor: PropTypes.string,
    rightImage: PropTypes.string
};

JiscImageBanner.defaultProps = {
    color: 'white',
    leftBackgroundColor: 'orange',
    leftImage: 'https://www.jisc.ac.uk/sites/default/files/node-transparent-8d1558.png',
    rightBackgroundColor: 'https://www.jisc.ac.uk/sites/default/files/connectivity-hero.jpg',
    rightImage: 'white'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscImageBanner {...props} />
        </ThemeProvider>
    );
};
