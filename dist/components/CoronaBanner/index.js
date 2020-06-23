import React from 'react';
import { makeStyles, Typography, Container, Link, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import theme from './../../theme.js';
const breakpoints = createBreakpoints({});
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
    [breakpoints.up('sm')]: {
      height: '45px',
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
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center'
    },
    textAlign: 'center'
  },
  text: {
    color: '#fff',
    marginLeft: theme.spacing(2),
    [breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3)
    }
  },
  coronaLink: {
    color: 'white'
  }
}));

const CoronaBanner = () => {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(Container, {
    className: classes.container
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    className: classes.text
  }, /*#__PURE__*/React.createElement(Link, {
    className: classes.coronaLink,
    href: "https://www.jisc.ac.uk/coronavirus"
  }, "Coronavirus (COVID-19) advice and information for our members"))));
};

export default (() => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(CoronaBanner, null));
});