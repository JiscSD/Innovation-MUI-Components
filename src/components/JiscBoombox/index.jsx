import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundColor, backgroundImage, color, paddingChoice, backgroundCover }) =>
    makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.jisc[backgroundColor] || theme.palette.background.banner,
            backgroundImage: `url(${backgroundImage})` || '',
            backgroundSize: backgroundCover ? 'cover' : 'auto',
            color: theme.palette.jisc[color] || 'white',
            padding: theme.spacing(paddingChoice || 10),
            textAlign: 'center'
        }
    }));

const JiscBoombox = ({ altTitle, backgroundColor, color, backgroundImage, children, padding, backgroundCover }) => {
    const paddingSizes = {
        lg: 14,
        md: 10,
        sm: 6,
        xs: 2
    };

    const paddingChoice = paddingSizes[padding] || null;

    const classes = useStyles({ backgroundColor, backgroundCover, backgroundImage, color, paddingChoice })();

    return (
        <div title={altTitle} className={classes.root}>
            {children}
        </div>
    );
};

JiscBoombox.propTypes = {
    altTitle: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundCover: PropTypes.bool,
    backgroundImage: PropTypes.string,
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    padding: PropTypes.string
};

JiscBoombox.defaultProps = {
    altTitle: 'dark blue background',
    backgroundColor: 'orange',
    backgroundCover: true,
    backgroundImage: 'https://www.jisc.ac.uk/sites/default/files/abstract-blue-background-dark.jpg',
    color: 'white',
    padding: 'md'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscBoombox {...props} />
        </ThemeProvider>
    );
};
