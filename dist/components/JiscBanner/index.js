import React from 'react';
import PropTypes from 'prop-types';
import theme from './../../theme.js';
import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import JiscLogo from './../JiscLogo';
const breakpoints = createBreakpoints({});
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
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
    color: theme.palette.background.banner,
    marginLeft: theme.spacing(2),
    [breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3)
    }
  }
}));

const JiscBanner = ({
  title
}) => {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement(Container, {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.leftItems
  }, /*#__PURE__*/React.createElement(JiscLogo, null), /*#__PURE__*/React.createElement(Typography, {
    variant: "body2",
    className: classes.text
  }, title)))));
};

JiscBanner.propTypes = {
  title: PropTypes.string
};
JiscBanner.defaultProps = {
  title: 'Jisc'
};
export default (props => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(JiscBanner, props));
});