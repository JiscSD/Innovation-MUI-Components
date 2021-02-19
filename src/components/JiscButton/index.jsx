import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Button, ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundColor, color, selectedColor }) =>
    makeStyles((theme) => ({
        button: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                color: 'white'
            },
            '&:active': {
                backgroundColor: theme.palette.jisc[selectedColor],
                borderColor: theme.palette.jisc[selectedColor],
            },
            '&:focus': {
                backgroundColor: theme.palette.jisc[selectedColor],
                borderColor: theme.palette.jisc[selectedColor],
            },
            backgroundColor: theme.palette.jisc[backgroundColor] || '',
            borderColor: theme.palette.jisc[color] || theme.palette.jisc.white,
            color: theme.palette.jisc[color] || theme.palette.jisc.white
        },
        selected: {
            backgroundColor: theme.palette.jisc[selectedColor],
            borderColor: theme.palette.jisc[selectedColor],
        }
    }));

const JiscButton = (props) => {
    const { color, backgroundColor, selected, selectedColor, ...otherProps } = props;
    const classes = useStyles({
        backgroundColor,
        color,
        selectedColor
    })();

    return <Button variant='outlined' className={clsx(classes.button, selected && classes.selected)} {...otherProps} />;
};

JiscButton.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    selected: PropTypes.bool,
    selectedColor: PropTypes.string
};

JiscButton.defaultProps = {
    backgroundColor: '',
    color: 'white',
    selected: false,
    selectedColor: 'orange'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscButton {...props} />
        </ThemeProvider>
    );
};
