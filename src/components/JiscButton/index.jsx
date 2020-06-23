import React from 'react';
import { makeStyles, Button, ThemeProvider } from '@material-ui/core';

import jiscTheme from '../../theme';

const useStyles = ({ outline }) =>
    makeStyles((theme) => ({
        button: {
            color: outline === 'primary' ? theme.palette.primary.main : 'white',
            textPrimary: 'primary',
            borderColor: outline === 'primary' ? theme.palette.primary.main : 'white',
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

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscButton {...props} />
        </ThemeProvider>
    );
};
