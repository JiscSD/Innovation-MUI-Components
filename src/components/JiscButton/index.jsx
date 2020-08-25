import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button, ThemeProvider } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundColor, color }) =>
    makeStyles((theme) => ({
        button: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                color: 'white'
            },
            backgroundColor: theme.palette.jisc[backgroundColor] || '',
            borderColor: theme.palette.jisc[color] || theme.palette.jisc.white,
            color: theme.palette.jisc[color] || theme.palette.jisc.white
        }
    }));

const JiscButton = (props) => {
    const { color, backgroundColor, ...otherProps } = props;
    const classes = useStyles({
        backgroundColor,
        color
    })();

    return <Button variant='outlined' className={classes.button} {...otherProps} />;
};

JiscButton.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string
};

JiscButton.defaultProps = {
    backgroundColor: '',
    color: 'white'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscButton {...props} />
        </ThemeProvider>
    );
};
