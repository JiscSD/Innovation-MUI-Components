import React from 'react';
import { makeStyles, ThemeProvider, Grid, Container } from '@material-ui/core';

import jiscTheme from '../../theme';

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

const JiscTextBox = ({ imageUrl, children, backgroundColor = 'white', color = 'black' }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={jiscTheme}>
            <div style={{ backgroundColor, color }}>
                <Container maxWidth='md' className={classes.root}>
                    <Grid container>
                        <Grid item md={12} lg={8} className={classes.marginAuto}>
                            {children}
                        </Grid>
                        <Grid item lg={4} className={classes.marginAuto}>
                            <img src={imageUrl} alt='text box' />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscTextBox {...props} />
        </ThemeProvider>
    );
};
