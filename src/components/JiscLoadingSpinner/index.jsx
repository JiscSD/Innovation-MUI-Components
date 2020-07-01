// @ts-check
import React from 'react';
import { makeStyles, CircularProgress, Grid, Typography, ThemeProvider } from '@material-ui/core';
import PropTypes from 'prop-types';
import jiscTheme from '../../theme.js';

const useStyles = ({ color }) =>
    makeStyles((theme) => ({
        bottom: {
            color: theme.palette.jisc.additionalGrey
        },
        circle: {
            strokeLinecap: 'round'
        },
        root: {},
        text: {
            color: theme.palette.jisc[color]
        },
        top: {
            animationDuration: '550ms',
            color: theme.palette.jisc[color] || theme.palette.jisc.orange
        }
    }));

const JiscLoadingSpinner = ({ title, color }) => {
    const classes = useStyles({ color })();

    return (
        <Grid container direction='column' justify='center' alignItems='center'>
            <Typography className={classes.text} component='div'>
                {title}
            </Typography>
            <br />
            <div className={classes.root}>
                <CircularProgress
                    variant='indeterminate'
                    disableShrink
                    className={classes.top}
                    classes={{
                        circle: classes.circle
                    }}
                    size={50}
                    thickness={3}
                />
            </div>
        </Grid>
    );
};

JiscLoadingSpinner.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string.isRequired
};

JiscLoadingSpinner.defaultProps = {
    color: 'orange'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscLoadingSpinner {...props} />
        </ThemeProvider>
    );
};
