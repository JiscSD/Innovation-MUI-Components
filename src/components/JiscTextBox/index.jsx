import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme.js';

import { makeStyles, Typography, ThemeProvider, Grid, Container } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        marginBottom: '2rem'
    },
    gridContainer: {
        padding: '3rem 0'
    },
    gridContainerGrey: {
        backgroundColor: theme.palette.background.banner,
        color: 'white',
        padding: '3rem 0'
    },
    marginAuto: {
        margin: 'auto'
    },
    'MuiContainer-maxWidthLg': {}
}));

const JiscTextBox = ({ paragraphs, imageUrl }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='md' className={classes.root}>
                <Grid container>
                    <Grid item md={12} lg={8} className={classes.marginAuto}>
                        {paragraphs.map((paragraph) => (React.isValidElement(paragraph) ? paragraph : <Typography>{paragraph}</Typography>))}
                    </Grid>
                    <Grid item lg={4} className={classes.marginAuto}>
                        <img src={imageUrl} />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default (props) => {
    return (
        <ThemeProvider theme={theme}>
            <JiscTextBox {...props} />
        </ThemeProvider>
    );
};
