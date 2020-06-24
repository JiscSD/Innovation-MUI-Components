import React from 'react';
import { makeStyles, ThemeProvider, Grid } from '@material-ui/core';

import jiscTheme from '../../theme';

const hexToRgb = (hex) => {
    console.log(hex);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
          }
        : null;
};

const useStyles = ({ backgroundImage, backgroundColor, color }) => {
    return makeStyles((theme) => {
        const rgb = hexToRgb(theme.palette.jisc[backgroundColor]);
        return {
            root: {},
            imageContainer: {
                backgroundImage: backgroundImage && `url(${backgroundImage})`,
                backgroundColor: theme.palette.jisc[backgroundColor],
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '500px'
            },
            textContainer: {
                backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.85)`,
                color: theme.palette.jisc[color],
                padding: theme.spacing(5)
            }
        };
    });
};

const JiscFeatureBox = ({ backgroundImage, backgroundColor, color, children }) => {
    const classes = useStyles({ backgroundImage, backgroundColor, color })();
    return (
        <Grid container direction='column' justify='flex-end' alignItems='flex-end' className={classes.imageContainer}>
            <Grid item className={classes.textContainer}>
                {children}
            </Grid>
        </Grid>
    );
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscFeatureBox {...props} />
        </ThemeProvider>
    );
};
