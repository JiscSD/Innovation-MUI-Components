import React from 'react';
import { makeStyles, Typography, Container, Link, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import jiscTheme from '../../theme.js';

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
        justifyContent: 'flex-start',
        [breakpoints.up('sm')]: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        textAlign: 'center'
    },
    coronaLink: {
        color: 'white'
    },
    root: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing(1),
        [breakpoints.up('sm')]: {
            alignItems: 'center',
            height: '45px',
            paddingTop: 0
        }
    },
    text: {
        color: '#fff',
        marginLeft: theme.spacing(2),
        [breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3)
        }
    }
}));

const JiscCoronaBanner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Typography variant='body2' className={classes.text}>
                    <Link className={classes.coronaLink} href='https://www.jisc.ac.uk/coronavirus'>
                        Coronavirus (COVID-19) advice and information for our members
                    </Link>
                </Typography>
            </Container>
        </div>
    );
};

export default () => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscCoronaBanner />
        </ThemeProvider>
    );
};
