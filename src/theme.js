import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import roboto from 'typeface-roboto';

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#fff',
            banner: '#333333',
            quote: '#e4eaec'
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
        },
        jisc: {
            white: '#ffffff',
            orange: '#e85e13',
            darkOrange: '#9f3515',
            pink: '#e61554',
            yellow: '#f9b000',
            lime: '#b2bb1c',
            blue: '#0092cb',
            violet: '#b71a8b',
            maroon: '#820036',
            olive: '#8a7300',
            green: '#458525',
            indigo: '#00557f',
            purple: '#552481',
            textGrey: '#2c3841',
            supportText: '#525e67',
            darkGrey: '#9ba7b0',
            midGrey: '#b9c9d5',
            lightGrey: '#cadfb0',
            additionalGrey: '#fafafa'
        }
    },

    typography: {
        fontFamily: 'Roboto',
        color: '#2c3841'
    },

    overrides: {
        MuiLink: {
            root: {
                textDecoration: 'underline !important',
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
            }
        },
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
