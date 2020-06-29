import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Grid } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              b: parseInt(result[3], 16),
              g: parseInt(result[2], 16),
              r: parseInt(result[1], 16)
          }
        : null;
};

const useStyles = ({ backgroundImage, backgroundColor, color, imageHeight = '500px' }) => {
    return makeStyles((theme) => {
        const rgb = hexToRgb(theme.palette.jisc[backgroundColor]);
        return {
            imageContainer: {
                backgroundColor: theme.palette.jisc[backgroundColor],
                backgroundImage: backgroundImage && `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: imageHeight
            },
            textContainer: {
                backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.85)`,
                color: theme.palette.jisc[color],
                padding: theme.spacing(5)
            }
        };
    });
};

const JiscFeatureBox = ({ backgroundColor, backgroundImage, children, color, imageHeight }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight })();
    return (
        <Grid container direction='column' justify='flex-end' alignItems='flex-end' className={classes.imageContainer}>
            <Grid item className={classes.textContainer}>
                {children}
            </Grid>
        </Grid>
    );
};

JiscFeatureBox.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    imageHeight: PropTypes.string
};

JiscFeatureBox.defaultProps = {
    backgroundColor: 'blue',
    backgroundImage: 'https://innovation-components-images.s3-eu-west-1.amazonaws.com/landscape/credit_card_inform.jpg',
    color: 'white',
    imageHeight: '400px'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscFeatureBox {...props} />
        </ThemeProvider>
    );
};
