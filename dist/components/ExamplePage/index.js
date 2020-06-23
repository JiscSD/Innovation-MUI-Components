import React from 'react';
import theme from './../../theme.js';
import JiscBanner from './../JiscBanner';
import CoronaBanner from './../CoronaBanner';
import JiscTopBox from './../JiscTopBox';
import JiscTextBox from './../JiscTextBox';
import { makeStyles, Typography, ThemeProvider, Grid, Container } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});
const useStyles = makeStyles(theme => ({
  gridContainer: {
    padding: '3rem 0'
  },
  gridContainerGrey: {
    backgroundColor: theme.palette.background.banner,
    color: 'white',
    padding: '3rem 0'
  },
  textGrid: {
    margin: 'auto'
  }
}));

const ExamplePage = () => {
  const classes = useStyles();
  const Title1 = /*#__PURE__*/React.createElement(Typography, {
    variant: "h2"
  }, "Your trusted partner in edtech");
  const Para1 = 'We know that digital technology has the ability to transform education and research and are here to help you every step of the way.';
  const Para2 = 'Your Jisc membership includes a connection to the superfast and secure Janet Network, significant savings on content and expert advice and guidance on digital technology for the sector.';
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(JiscBanner, null), /*#__PURE__*/React.createElement(CoronaBanner, null), /*#__PURE__*/React.createElement(JiscTopBox, {
    title: "Connectivity",
    content: "Connecting you through the unrivalled, world-class Janet Network so that you can collaborate on your own education and research networks - anywhere, anytime.",
    leftImage: "https://www.jisc.ac.uk/sites/default/files/node-transparent-8d1558.png",
    rightImage: "https://www.jisc.ac.uk/sites/default/files/connectivity-hero.jpg"
  }), /*#__PURE__*/React.createElement(JiscTextBox, {
    paragraphs: [Title1, Para1, Para2],
    imageUrl: "https://www.jisc.ac.uk/sites/default/files/two-connected-workers-jisc-homepage_0.png"
  }), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    className: classes.gridContainerGrey
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Grid, {
    container: true
  }, /*#__PURE__*/React.createElement(Grid, {
    item: true,
    md: 12,
    lg: 8,
    className: classes.textGrid
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "body1"
  }, "Looking towards a future where education is an inclusive and ethical journey for everyone, Digifest 2020 explored lifelong learning and ways in which technology can transform learning for all.")), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    lg: 4
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://www.jisc.ac.uk/sites/default/files/digifest-2020-logo-white-transparent-200.png"
  }))))));
};

export default (props => {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(ExamplePage, null));
});