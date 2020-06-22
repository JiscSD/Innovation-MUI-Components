import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import roboto from 'typeface-roboto';

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#fff',
            banner: '#333333'
        },
        primary: {
            main: '#007aaa'
        },
        error: {
            main: '#f44336'
        },
        warning: {
            main: '#ff9800'
        },
        info: {
            main: '#2196f3'
        },
        success: {
            main: '#4caf50'
        }
    },

    typography: {
        fontFamily: 'Roboto',
        color: '#2c3841'
    },
    link: {
        textDecoration: 'underline',
        color: '#007aaa',
        border: '0',
        '&:hover': {
            color: '#ae460e',
            transition: 'color .2s ease',
            cursor: 'pointer'
        },
        '&:focus': {
            color: '#007aaa',
            textDecoration: 'none',
            backgroundColor: '#fd6',
            outline: 'solid #fd6'
        },
        '&:focus:hover': {
            color: '#007aaa',
            textDecoration: 'underline',
            backgroundColor: '#fd6',
            outline: 'solid #fd6'
        },
        '&:active': {
            color: '#007aaa',
            textDecoration: 'underline',
            backgroundColor: '#fd6',
            outline: 'solid #fd6'
        }
    },

    overrides: {
        MuiTypography: {
            h1: {
                fontSize: '2.5rem',
                fontWeight: '200',
                [breakpoints.up('sm')]: {
                    fontSize: '3rem'
                },
                [breakpoints.up('md')]: {
                    fontSize: '3.5rem'
                }
            },
            h2: {
                fontSize: '3.6rem',
                fontWeight: '200',
                // lineHeight: '4rem',
                [breakpoints.up('sm')]: {
                    fontSize: '2.25rem'
                },
                [breakpoints.up('md')]: {
                    fontSize: '2.5rem'
                }
            },
            h3: {
                fontSize: '1.5rem',
                fontWeight: '200',
                [breakpoints.up('sm')]: {
                    fontSize: '1.75rem'
                },
                [breakpoints.up('md')]: {
                    fontSize: '2rem'
                }
            },
            h4: {
                fontSize: '1.25rem',
                fontWeight: '200',
                [breakpoints.up('md')]: {
                    fontSize: '1.5rem'
                }
            },
            h5: {
                fontSize: '1rem',
                [breakpoints.up('md')]: {
                    fontSize: '1.25rem'
                }
            },
            h6: {
                fontSize: '1rem'
            },
            body1: {
                marginTop: '2rem',
                fontSize: '1.3rem',
                fontWeight: '200',
                '& strong': {
                    fontWeight: '400'
                }
            },
            body2: {
                fontSize: '1rem',
                '& strong': {
                    fontWeight: 500
                }
            },
            overline: {
                fontSize: '0.875rem',
                [breakpoints.up('md')]: {
                    fontSize: '1.5625rem'
                }
            }
        }
    }
});

export default theme;
