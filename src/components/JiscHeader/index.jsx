import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import theme from '../../theme';
import JiscLogo from '../JiscLogo';

const breakpoints = createBreakpoints({});

const useStyles = ({ color, backgroundColor }) =>
    makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.jisc[backgroundColor] || theme.palette.jisc.white,
            paddingTop: theme.spacing(1),
            [breakpoints.up('sm')]: {
                height: '55px',
                alignItems: 'center',
                paddingTop: 0
            }
        },
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            height: 'inherit',
            [breakpoints.up('sm')]: {
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center'
            }
        },
        leftItems: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
        },
        text: {
            color: theme.palette.jisc[color] || theme.palette.jisc.textGrey,
            marginLeft: theme.spacing(2),
            [breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3)
            }
        }
    }));

const JiscHeader = ({ title, color, backgroundColor }) => {
    const classes = useStyles({ color, backgroundColor })();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.leftItems}>
                    <JiscLogo />
                    <Typography variant='body2' className={classes.text}>
                        {title}
                    </Typography>
                </div>
            </Container>
        </div>
    );
};

JiscHeader.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
};

JiscHeader.defaultProps = {
    title: 'Jisc',
    color: 'textGrey',
    backgroundColor: 'white'
};

export default (props) => {
    return (
        <ThemeProvider theme={theme}>
            <JiscHeader {...props} />
        </ThemeProvider>
    );
};
