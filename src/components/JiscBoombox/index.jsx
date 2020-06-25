import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../theme';

const useStyles = ({ backgroundColor, backgroundImage, color }) =>
    makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.jisc[backgroundColor] || theme.palette.background.banner,
            backgroundImage: `url(${backgroundImage})` || '',
            padding: theme.spacing(8),
            textAlign: 'center',
            color: theme.palette.jisc[color] || 'white'
        }
    }));

const JiscBoombox = ({ backgroundColor, color, backgroundImage, children }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color })();

    return <div className={classes.root}>{children}</div>;
};

JiscBoombox.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.node
};

export default (props) => {
    return (
        <ThemeProvider theme={theme}>
            <JiscBoombox {...props} />
        </ThemeProvider>
    );
};
