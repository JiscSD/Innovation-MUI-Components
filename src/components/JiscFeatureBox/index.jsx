import React from 'react';
import { makeStyles, ThemeProvider, Box, Container } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ backgroundImage, backgroundColor, color }) =>
    makeStyles((theme) => ({
        imageContainer: {
            backgroundImage: backgroundImage && `url(${backgroundImage})`,
            backgroundColor: theme.palette.jisc[backgroundColor],
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: theme.palette.jisc[color] || 'white'
        },
        textContainer: {
            backgroundColor: theme.palette.jisc[backgroundColor],
            color: theme.palette.jisc[color]
        }
    }));

const JiscFeatureBox = ({ backgroundImage, backgroundColor, color, children }) => {
    const classes = useStyles(backgroundImage, backgroundColor, color);
    return (
        <Container className={classes.imageContainer}>
            <Box display='flex' alignItems='flex-end' justifyContent='flex-end'>
                {children}
            </Box>
        </Container>
    );
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscFeatureBox {...props} />
        </ThemeProvider>
    );
};
