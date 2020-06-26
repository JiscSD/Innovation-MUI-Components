import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import theme from '../../theme';
import JiscLogo from '../JiscLogo';
import JiscButton from '../JiscButton';

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
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%'
        },
        text: {
            color: theme.palette.jisc[color] || theme.palette.jisc.textGrey,
            marginLeft: theme.spacing(2),
            [breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3)
            }
        },
        button: {
            marginLeft: 'auto'
        }
    }));

const JiscLoginHeader = ({ title, color, backgroundColor, buttonColor }) => {
    const classes = useStyles({ color, backgroundColor })();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.leftItems}>
                    <JiscLogo />
                    <Typography variant='body2' className={classes.text}>
                        {title}
                    </Typography>
                    <JiscButton color={buttonColor} style={{ marginLeft: 'auto' }}>
                        Login
                    </JiscButton>
                </div>
            </Container>
        </div>
    );
};

JiscLoginHeader.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    buttonColor: PropTypes.string
};

JiscLoginHeader.defaultProps = {
    title: 'Jisc',
    color: 'textGrey',
    backgroundColor: 'white',
    buttonColor: 'textGrey'
};

export default (props) => {
    return (
        <ThemeProvider theme={theme}>
            <JiscLoginHeader {...props} />
        </ThemeProvider>
    );
};
