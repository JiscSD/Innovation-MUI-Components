import React from 'react';
import { makeStyles, ThemeProvider, Grid, Container } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ backgroundImage, backgroundColor, color }) =>
    makeStyles((theme) => ({
        imageContainer: {
            backgroundImage: backgroundImage && `url(${backgroundImage})`,
            backgroundColor: theme.palette.jisc[backgroundColor],
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: theme.palette.jisc[color] || 'white',
            padding: '10rem 8rem',
            [breakpoints.down('xs')]: {
                padding: '1rem'
            }
        },
        textContainer: {
            backgroundColor: theme.palette.jisc[backgroundColor],
            color: theme.palette.jisc[color]
        }
    }));

const JiscFeatureBox = ({ backgroundImage, backgroundColor, color }) => {
    const classes = useStyles(backgroundImage, backgroundColor, color);

    <Container className={classes.imageContainer}>
        <Box display='flex'>

        </Box>
    </Container>

};

};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscInfoBox {...props} />
        </ThemeProvider>
    );
};
