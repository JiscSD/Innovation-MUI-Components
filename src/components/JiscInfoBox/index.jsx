import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Grid, Container } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundColor, color }) =>
    makeStyles((theme) => ({
        image: {
            height: '100%',
            objectFit: 'cover',
            width: '100%'
        },
        marginAuto: {
            margin: 'auto'
        },
        root: {
            backgroundColor: theme.palette.jisc[backgroundColor] || 'transparent',
            color: theme.palette.jisc[color] || theme.palette.jisc.textGrey,
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(3)
        }
    }));

const JiscInfoBox = ({ imageUrl, imageAltText, children, backgroundColor, color, imagePosition }) => {
    const classes = useStyles({ backgroundColor, color })();
    return (
        <div className={classes.root}>
            <Container maxWidth='md'>
                <Grid container spacing={8} direction={imagePosition === 'right' ? 'row' : 'row-reverse'}>
                    <Grid item md={12} lg={8} className={classes.marginAuto}>
                        {children}
                    </Grid>
                    <Grid item lg={4} className={classes.marginAuto}>
                        <img src={imageUrl} alt={imageAltText} className={classes.image} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

JiscInfoBox.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    imageAltText: PropTypes.string,
    imagePosition: PropTypes.string,
    imageUrl: PropTypes.string
};

JiscInfoBox.defaultProps = {
    backgroundColor: 'transparent',
    color: 'textGrey',
    imageAltText: 'connectivity services',
    imagePosition: 'right',
    imageUrl: 'https://innovation-components-images.s3-eu-west-1.amazonaws.com/humaaans/connectivity-services-needs.png'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscInfoBox {...props} />
        </ThemeProvider>
    );
};
