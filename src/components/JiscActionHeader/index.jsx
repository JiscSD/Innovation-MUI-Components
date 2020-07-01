import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import jiscTheme from '../../theme.js';
import JiscLogo from '../JiscLogo/index';

const breakpoints = createBreakpoints({});

const useStyles = ({ color, backgroundColor }) =>
    makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: 'inherit',
            justifyContent: 'flex-start',
            [breakpoints.up('sm')]: {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }
        },

        floatRight: {
            marginLeft: 'auto'
        },
        leftItems: {
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
        },
        root: {
            backgroundColor: theme.palette.jisc[backgroundColor] || theme.palette.jisc.white,
            paddingTop: theme.spacing(1),
            [breakpoints.up('sm')]: {
                alignItems: 'center',
                height: '55px',
                paddingTop: 0
            }
        },
        text: {
            color: theme.palette.jisc[color] || theme.palette.jisc.textGrey,
            marginLeft: theme.spacing(2),
            [breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3)
            }
        }
    }));

const JiscActionHeader = ({ title, color, backgroundColor, children }) => {
    const classes = useStyles({ backgroundColor, color })();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.leftItems}>
                    <JiscLogo />
                    <Typography variant='body2' className={classes.text}>
                        {title}
                    </Typography>
                    <div className={classes.floatRight}>{children}</div>
                </div>
            </Container>
        </div>
    );
};

JiscActionHeader.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    color: PropTypes.string,
    title: PropTypes.string
};

JiscActionHeader.defaultProps = {
    backgroundColor: 'white',
    color: 'textGrey',
    title: 'Jisc'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscActionHeader {...props} />
        </ThemeProvider>
    );
};
