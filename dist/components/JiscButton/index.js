function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import theme from './../../theme.js';
import { makeStyles, Button, ThemeProvider } from '@material-ui/core';

const useStyles = ({
  outline
}) => makeStyles(theme => ({
  button: {
    color: outline === 'primary' ? theme.palette.primary.main : 'white',
    textPrimary: 'primary',
    borderColor: outline === 'primary' ? theme.palette.primary.main : 'white',
    '&:hover': {
      color: 'white',
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main
    }
  }
}));

const JiscButton = props => {
  const classes = useStyles(props)();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Button, _extends({
    variant: "outlined",
    className: classes.button
  }, props)));
};

export default (props => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(JiscButton, props));
});