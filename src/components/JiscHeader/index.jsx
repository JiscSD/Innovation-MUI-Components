import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import theme from '../../theme';
import JiscLogo from '../JiscLogo';

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        paddingTop: theme.spacing(1),
        [breakpoints.up('sm')]: {
            height: '55px',
            alignItems: 'center',
            paddingTop: 0
        }
    },
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height: 'inherit',
        [breakpoints.up('sm')]: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
        }
    },
    leftItems: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: theme.palette.background.banner,
        marginLeft: theme.spacing(2),
        [breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3)
        }
    }
}));

const JiscBanner = ({ title }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.leftItems}>
                    <JiscLogo />
                    <Typography variant='body2' className={classes.text}>
                        {title}
                    </Typography>
                </div>
            </Container>
        </div>
    );
};

JiscBanner.propTypes = {
    title: PropTypes.string
};

JiscBanner.defaultProps = {
    title: 'Jisc'
};

export default (props) => {
    return (
        <ThemeProvider theme={theme}>
            <JiscBanner {...props} />
        </ThemeProvider>
    );
};
