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
        marginAuto: {
            margin: 'auto'
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
        imageLeft: {
            paddingRight: theme.spacing(2)
        },
        imageRight: {
            paddingLeft: theme.spacing(2)
        }
    }));

const JiscInfoBox = ({ imageUrl, children, backgroundColor, color, imagePosition = 'right' }) => {
    const classes = useStyles({ backgroundColor, color })();
    const paddingClassname = imagePosition === 'right' ? 'imageRight' : 'imageLeft';
    return (
        <ThemeProvider theme={jiscTheme}>
            <div className={classes.root}>
                <Container maxWidth='md'>
                    <Grid container direction={imagePosition === 'right' ? 'row' : 'row-reverse'}>
                        <Grid item md={12} lg={8} className={classes.marginAuto}>
                            {children}
                        </Grid>
                        <Grid item lg={4} className={`${classes.marginAuto} ${classes[paddingClassname]}`}>
                            <img src={imageUrl} className={classes.image} alt='text box' />
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
            <JiscInfoBox {...props} />
        </ThemeProvider>
    );
};
