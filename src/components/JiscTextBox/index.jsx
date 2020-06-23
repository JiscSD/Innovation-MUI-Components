import React from 'react';
import { makeStyles, ThemeProvider, Grid, Container } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ backgroundColor, color }) =>
    makeStyles((theme) => ({
        root: {
            marginTop: '2rem',
            marginBottom: '2rem',
            backgroundColor: theme.palette.jisc[backgroundColor] || 'white',
            color: theme.palette.jisc[color] || 'black'
        },
        gridContainer: {
            padding: '3rem 0'
        },
        gridContainerGrey: {
            padding: '3rem 0'
        },
        marginAuto: {
            margin: 'auto'
        }
    }));

const JiscTextBox = ({ imageUrl, children, backgroundColor, color }) => {
    const classes = useStyles({ backgroundColor, color })();

    return (
        <ThemeProvider theme={jiscTheme}>
            <div className={classes.root}>
                <Container maxWidth='md'>
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
