import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ backgroundColor, backgroundImage }) =>
    makeStyles((theme) => ({
        root: {
            backgroundColor: backgroundColor || theme.palette.background.banner,
            backgroundImage: `url(${backgroundImage})` || '',
            padding: '3rem 12rem',
            textAlign: 'center',
            color: 'white'
        },
        text: {
            margin: '1rem 0'
        }
    }));

const JiscBoombox = ({ backgroundColor, backgroundImage, children }) => {
    const classes = useStyles({ backgroundColor, backgroundImage })();

    return <div className={classes.root}>{children}</div>;
};

JiscBoombox.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.node
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscBoombox {...props} />
        </ThemeProvider>
    );
};
