import React from 'react';
import PropTypes from 'prop-types';
import theme from './../../theme.js';
import { makeStyles, Typography, Container, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const useStyles = ({
  backgroundColor,
  backgroundImage
}) => makeStyles(theme => ({
  root: {
    backgroundColor: backgroundColor || theme.palette.background.banner,
    backgroundImage: `url(${backgroundImage})` || '',
    padding: '3rem 12rem',
    textAlign: 'center',
    color: 'white'
  },
  text: {
    margin: '1rem 0'
  }
}));

const JiscBoombox = ({
  backgroundColor,
  backgroundImage,
  children
}) => {
  const classes = useStyles({
    backgroundColor,
    backgroundImage
  })();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, children));
};

JiscBoombox.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string
};
export default (props => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(JiscBoombox, props));
});