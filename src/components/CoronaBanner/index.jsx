import React from 'react';
import { makeStyles, Typography, Container, Link, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import jiscTheme from '../../theme';

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing(1),
        [breakpoints.up('sm')]: {
            height: '45px',
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
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center'
        },
        textAlign: 'center'
    },
    text: {
        color: '#fff',
        marginLeft: theme.spacing(2),
        [breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3)
        }
    },
    coronaLink: {
        color: 'white'
    }
}));

const CoronaBanner = () => {
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
            <CoronaBanner />
        </ThemeProvider>
    );
};
