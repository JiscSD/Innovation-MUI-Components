import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import jiscTheme from '../../theme.js';

const breakpoints = createBreakpoints({});

const useStyles = ({ backgroundColor, color }) =>
    makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: 'inherit',
            justifyContent: 'flex-start',
            [breakpoints.up('sm')]: {
                alignItems: 'center',
                flexDirection: 'row'
            }
        },
        root: {
            backgroundColor: theme.palette.jisc[backgroundColor] || theme.palette.jisc.orange,
            [breakpoints.up('sm')]: {
                alignItems: 'center',
                height: '75px'
            }
        },
        text: {
            color: theme.palette.jisc[color] || theme.palette.jisc.white,
            marginLeft: theme.spacing(1),
            [breakpoints.up('sm')]: {
                marginLeft: theme.spacing(10)
            }
        }
    }));

const JiscTitleBanner = ({ backgroundColor, color, title }) => {
    const classes = useStyles({ backgroundColor, color })();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Typography variant='h3' className={classes.text}>
                    {title}
                </Typography>
            </Container>
        </div>
    );
};

JiscTitleBanner.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string.isRequired
};

JiscTitleBanner.defaultProps = {
    backgroundColor: 'orange',
    color: 'white'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscTitleBanner {...props} />
        </ThemeProvider>
    );
};
