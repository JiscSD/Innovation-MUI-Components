import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button, ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundColor, color, selectedBackgroundColor, selectedTextColor }) =>
    makeStyles((theme) => ({
        button: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                color: 'white'
            },
            '&:active': {
                backgroundColor: theme.palette.jisc[selectedBackgroundColor],
                borderColor: theme.palette.jisc[selectedBackgroundColor],
                color: theme.palette.jisc[selectedTextColor] || theme.palette.jisc[color]
            },
            '&:focus': {
                backgroundColor: theme.palette.jisc[selectedBackgroundColor],
                borderColor: theme.palette.jisc[selectedBackgroundColor],
                color: theme.palette.jisc[selectedTextColor] || theme.palette.jisc[color]
            },
            backgroundColor: theme.palette.jisc[backgroundColor] || '',
            borderColor: theme.palette.jisc[color] || theme.palette.jisc.white,
            color: theme.palette.jisc[color] || theme.palette.jisc.white
        },
        selected: {
            backgroundColor: theme.palette.jisc[selectedBackgroundColor],
            borderColor: theme.palette.jisc[selectedBackgroundColor],
            color: theme.palette.jisc[selectedTextColor] || theme.palette.jisc[color]
        }
    }));

const JiscButton = (props) => {
    const { color, backgroundColor, selected, selectedBackgroundColor, selectedTextColor,...otherProps } = props;
    const classes = useStyles({
        backgroundColor,
        color,
        selectedBackgroundColor,
        selectedTextColor
    })();

    return <Button variant='outlined' className={clsx(classes.button, selected && classes.selected)} {...otherProps} />;
};

JiscButton.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    selected: PropTypes.bool,
    selectedBackgroundColor: PropTypes.string,
    selectedTextColor: PropTypes.string
};

JiscButton.defaultProps = {
    backgroundColor: '',
    color: 'white',
    selected: false,
    selectedBackgroundColor: 'orange',
    selectedTextColor: ''
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscButton {...props} />
        </ThemeProvider>
    );
};
