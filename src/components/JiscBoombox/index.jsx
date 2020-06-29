import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../theme';

const useStyles = ({ backgroundColor, backgroundImage, color, paddingChoice, backgroundCover }) =>
    makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.jisc[backgroundColor] || theme.palette.background.banner,
            backgroundSize: backgroundCover ? 'cover' : 'auto',
            backgroundImage: `url(${backgroundImage})` || '',
            padding: theme.spacing(paddingChoice || 10),
            textAlign: 'center',
            color: theme.palette.jisc[color] || 'white'
        }
    }));

const JiscBoombox = ({ backgroundColor, color, backgroundImage, children, padding, backgroundCover }) => {
    const paddingSizes = {
        xs: 2,
        sm: 6,
        md: 10,
        lg: 14
    };

    const paddingChoice = paddingSizes[padding] || null;

    const classes = useStyles({ backgroundColor, backgroundImage, color, paddingChoice, backgroundCover })();

    return <div className={classes.root}>{children}</div>;
};

JiscBoombox.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    padding: PropTypes.string,
    backgroundCover: PropTypes.bool
};

export default (props) => {
    return (
        <ThemeProvider theme={theme}>
            <JiscBoombox {...props} />
        </ThemeProvider>
    );
};
