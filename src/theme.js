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
                    color: '#00557F',
                    outline: 'solid #fd6',
                    textDecoration: 'underline'
                },
                '&:focus': {
                    backgroundColor: '#fd6',
                    color: '#00557F',
                    outline: 'solid #fd6',
                    textDecoration: 'none'
                },
                '&:focus:hover': {
                    backgroundColor: '#fd6',
                    color: '#00557F',
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
            gutterBottom: {
                marginBottom: '1rem'
            },
            paragraph: {
                marginBottom: '1.6875rem'
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
        text: {
            primary: '#2c3841'
        },
        warning: {
            main: '#ff9800'
        }
    },
    typography: {
        body1: {
            '& strong': {
                fontWeight: '400'
            },
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6875rem'
        },
        body2: {
            '& strong': {
                fontWeight: 500
            },
            fontSize: '0.9375rem'
        },
        fontFamily: 'Roboto',
        h1: {
            [breakpoints.up('sm')]: {
                fontSize: '1.875rem'
            },
            [breakpoints.up('md')]: {
                fontSize: '2.8125rem'
            },
            fontSize: '2.8125rem',
            fontWeight: '300'
        },
        h2: {
            [breakpoints.up('sm')]: {
                fontSize: '1.5rem'
            },
            [breakpoints.up('md')]: {
                fontSize: '1.875rem'
            },
            fontSize: '1.875rem',
            fontWeight: '400',
            lineHeight: '2.0625rem'
        },
        h3: {
            [breakpoints.up('sm')]: {
                fontSize: '1.3125rem'
            },
            [breakpoints.up('md')]: {
                fontSize: '1.5rem'
            },
            fontSize: '1.5rem',
            fontWeight: '400',
            lineHeight: '1.6875rem'
        },
        h4: {
            [breakpoints.up('md')]: {
                fontSize: '1.125rem'
            },
            fontSize: '1.125rem',
            fontWeight: '400',
            lineHeight: '1.3125rem'
        },
        h5: {
            [breakpoints.up('md')]: {
                fontSize: '1rem'
            },
            fontSize: '1rem'
        },
        h6: {
            fontSize: '0.625rem'
        },
        overline: {
            [breakpoints.up('md')]: {
                fontSize: '1.5625rem'
            },
            fontSize: '0.875rem'
        }
    }
});

export default theme;
