import React from 'react';
import { makeStyles, ThemeProvider, Grid, Container } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ backgroundColor, color }) =>
    makeStyles((theme) => ({
        root: {
            marginTop: '2rem',
            marginBottom: '2rem',
            backgroundColor: theme.palette.jisc[backgroundColor] || 'transparent',
            color: theme.palette.jisc[color] || 'black'
        },
        marginAuto: {
            margin: 'auto'
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    }));

const JiscInfoBox = ({ imageUrl, children, backgroundColor, color, imagePosition = 'right' }) => {
    const classes = useStyles({ backgroundColor, color })();
    return (
        <div className={classes.root}>
            <Container maxWidth='md'>
                <Grid container spacing={8} direction={imagePosition === 'right' ? 'row' : 'row-reverse'}>
                    <Grid item md={12} lg={8} className={classes.marginAuto}>
                        {children}
                    </Grid>
                    <Grid item lg={4} className={classes.marginAuto}>
                        <img src={imageUrl} className={classes.image} alt='text box' />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscInfoBox {...props} />
        </ThemeProvider>
    );
};
