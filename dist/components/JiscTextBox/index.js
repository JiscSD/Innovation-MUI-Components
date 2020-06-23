import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme.js';
import { makeStyles, Typography, ThemeProvider, Grid, Container, Link } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  gridContainer: {
    padding: '3rem 0'
  },
  gridContainerGrey: {
    backgroundColor: theme.palette.background.banner,
    color: 'white',
    padding: '3rem 0'
  },
  marginAuto: {
    margin: 'auto'
  },
  'MuiContainer-maxWidthLg': {}
}));

const JiscTextBox = ({
  imageUrl,
  children,
  backgroundColor = 'white',
  color = 'black'
}) => {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor,
      color
    }
  }, /*#__PURE__*/React.createElement(Container, {
    maxWidth: "md",
    className: classes.root
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 12,
    lg: 8,
    className: classes.marginAuto
  }, children), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 4,
    className: classes.marginAuto
  }, /*#__PURE__*/React.createElement("img", {
    src: imageUrl
  }))))));
};

export default (props => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(JiscTextBox, props));
});