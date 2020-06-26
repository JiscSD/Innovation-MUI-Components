import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button, ThemeProvider } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ color }) =>
    makeStyles((theme) => ({
        button: {
            color: theme.palette.jisc[color] || theme.palette.jisc.white,
            borderColor: theme.palette.jisc[color] || theme.palette.jisc.white,
            '&:hover': {
                color: 'white',
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.primary.main
            }
        }
    }));

const JiscButton = (props) => {
    const classes = useStyles(props)();

    return <Button variant='outlined' className={classes.button} {...props} />;
};

JiscButton.propTypes = {
    color: PropTypes.string
};

JiscButton.defaultProps = {
    color: 'white'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscButton {...props} />
        </ThemeProvider>
    );
};
