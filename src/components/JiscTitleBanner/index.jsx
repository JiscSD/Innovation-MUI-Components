import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import jiscTheme from '../../theme';

const breakpoints = createBreakpoints({});

const useStyles = ({ backgroundColor, color }) =>
    makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.jisc[backgroundColor] || theme.palette.jisc.orange,
            // paddingTop: theme.spacing(1),
            [breakpoints.up('sm')]: {
                height: '75px',
                // paddingTop: 0,
                alignItems: 'center'
            }
        },
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            height: 'inherit',
            [breakpoints.up('sm')]: {
                alignItems: 'center',
                flexDirection: 'row'
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
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscTitleBanner {...props} />
        </ThemeProvider>
    );
};
