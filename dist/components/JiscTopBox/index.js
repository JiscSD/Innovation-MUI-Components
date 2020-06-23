import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme.js';
import { makeStyles, Typography, ThemeProvider, Grid } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const useStyles = ({
  leftImage,
  rightImage,
  leftBackgroundColor,
  rightBackgroundColor
}) => makeStyles(theme => ({
  containerLeft: {
    backgroundImage: leftImage && `url(${leftImage})`,
    backgroundColor: leftBackgroundColor,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'white',
    padding: '10rem 8rem',
    [breakpoints.down('xs')]: {
      padding: '1rem'
    }
  },
  containerRight: {
    backgroundImage: rightImage && `url(${rightImage})`,
    backgroundColor: rightBackgroundColor,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));

const JiscImageBanner = ({
  leftImage,
  rightImage,
  leftBackgroundColor,
  rightBackgroundColor,
  children
}) => {
  const classes = useStyles({
    leftImage,
    rightImage,
    leftBackgroundColor,
    rightBackgroundColor
  })();
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: classes.root
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 6,
    xs: 12,
    className: classes.containerLeft
  }, children), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 6,
    className: classes.containerRight
  })));
};

JiscImageBanner.propTypes = {
  leftImage: PropTypes.string,
  leftBackgroundColor: PropTypes.string,
  rightImage: PropTypes.string,
  rightBackgroundColor: PropTypes.string
};
export default (props => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(JiscImageBanner, props));
});