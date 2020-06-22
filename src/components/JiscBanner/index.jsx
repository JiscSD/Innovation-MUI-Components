import React from 'react';
import PropTypes from 'prop-types';
import theme from './../../theme.js';

import {
    makeStyles,
    Typography,
    Container,
    ThemeProvider
} from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import JiscLogo from './../JiscLogo';

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.banner,
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
        color: '#fff',
        fontWeight: 400,
        marginLeft: theme.spacing(2),
        [breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3)
        }
    }
}));

const JiscBanner = ({ title }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Container className={classes.container}>
                    <div className={classes.leftItems}>
                        <JiscLogo />
                        <Typography variant='body1' className={classes.text}>
                            {title}
                        </Typography>
                    </div>
                </Container>
            </div>
        </ThemeProvider>
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
