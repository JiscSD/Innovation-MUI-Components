import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import roboto from 'typeface-roboto';

const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
    overrides: {
        MuiLink: {
            root: {
                '&:active': {
                    backgroundColor: '#fd6',
                    color: '#007aaa',
                    outline: 'solid #fd6',
                    textDecoration: 'underline'
                },
                '&:focus': {
                    backgroundColor: '#fd6',
                    color: '#007aaa',
                    outline: 'solid #fd6',
                    textDecoration: 'none'
                },
                '&:focus:hover': {
                    backgroundColor: '#fd6',
                    color: '#007aaa',
                    outline: 'solid #fd6',
                    textDecoration: 'underline'
                },
                '&:hover': {
                    color: '#ae460e',
                    cursor: 'pointer',
                    transition: 'color .2s ease'
                },
                border: '0',
                color: '#007aaa',
                textDecoration: 'underline !important'
            }
        },
        MuiTab: {
            root: {
                color: 'white'
            }
        },
        MuiTabs: {
            root: {
                backgroundColor: '#3c525f',
                color: 'white'
            }
        },
        MuiTypography: {
            body1: {
                '& strong': {
                    fontWeight: '400'
                },
                fontSize: '1.3rem',
                fontWeight: '300'
            },
            body2: {
                '& strong': {
                    fontWeight: 500
                },
                fontSize: '1rem'
            },
            h1: {
                fontSize: '2.5rem',
                fontWeight: '300',
                [breakpoints.up('sm')]: {
                    fontSize: '3rem'
                },
                [breakpoints.up('md')]: {
                    fontSize: '3.5rem'
                }
            },
            h2: {
                fontSize: '3.6rem',
                fontWeight: '300',
                [breakpoints.up('sm')]: {
                    fontSize: '2.25rem'
                },
                [breakpoints.up('md')]: {
                    fontSize: '2.5rem'
                }
            },
            h3: {
                fontSize: '1.5rem',
                fontWeight: '300',
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
            overline: {
                fontSize: '0.875rem',
                [breakpoints.up('md')]: {
                    fontSize: '1.5625rem'
                }
            }
        }
    },
    palette: {
        background: {
            banner: '#333333',
            default: '#fff',
            quote: '#e4eaec'
        },
        error: {
            main: '#f44336'
        },
        info: {
            main: '#2196f3'
        },
        jisc: {
            additionalGrey: '#fafafa',
            blue: '#0092cb',
            darkGrey: '#9ba7b0',
            darkOrange: '#9f3515',
            error: '#f44336',
            green: '#458525',
            indigo: '#00557f',
            info: '#2196f3',
            lightGrey: '#cadfb0',
            lime: '#b2bb1c',
            maroon: '#820036',
            midGrey: '#b9c9d5',
            olive: '#8a7300',
            orange: '#e85e13',
            pink: '#e61554',
            primary: '#007aaa',
            purple: '#552481',
            success: '#4caf50',
            supportText: '#525e67',
            textGrey: '#2c3841',
            violet: '#b71a8b',
            warning: '#ff9800',
            white: '#ffffff',
            yellow: '#f9b000'
        },
        primary: {
            main: '#007aaa'
        },
        success: {
            main: '#4caf50'
        },
        warning: {
            main: '#ff9800'
        }
    },
    typography: {
        color: '#2c3841',
        fontFamily: 'Roboto'
    }
});

export default theme;
