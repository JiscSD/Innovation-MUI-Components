import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, List } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ headerColor }) => {
    return makeStyles((theme) => {
        return {
            list: {
                maxWidth: '35vw',
                backgroundColor: 'white',
                margin: 'auto',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.13)',
                padding: 0,
            },
            fpurple: {
            },
            forange: {
            },
            fgreen: {
            },
            hpurple: {
            },
            horange: {
            },
            hgreen: {
            },

            '@global': {
                // Customer Colour Headers
                '[class*="list"] [class*="MuiListSubheader-root"]': {
                    backgroundColor: '#37444D',
                    color: 'white   '
                },
                '[class*="fpurple"] [class*="MuiListItem-root"]': {
                    color: 'purple   '
                },
                '[class*="forange"] [class*="MuiListItem-root"]': {
                    color: 'orange   '
                },
                '[class*="fgreen"] [class*="MuiListItem-root"]': {
                    color: 'green   '
                },
                // Customer Colour Text
                '[class*="horange"] [class*="MuiListSubheader-root"]': {
                    backgroundColor: 'orange'
                },
                '[class*="hgreen"] [class*="MuiListSubheader-root"]': {
                    backgroundColor: 'green'
                },
                '[class*="hpurple"] [class*="MuiListSubheader-root"]': {
                    backgroundColor: 'purple'
                },
                //Style 2
                '[class*="style2"] [class*="MuiListItem-root"]': {
                    borderBottomStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#ccc'
                },
                //Style 3
                '[class*="style3"] [class*="MuiListItem-root"]:nth-of-type(odd)': {
                    backgroundColor: '#EBF1F2'
                },
                //Style 4
                '[class*="style4"] [class*="MuiListItem-root"]:nth-of-type(odd)': {
                    backgroundColor: '#EBF1F2'
                },
            },
            listText: {
                paddingTop: '3px',
                paddingBottom: '3px'
            },
            style2: {
            },
            style3: {
            },
            style4: {
            }
        };
    });
};

const JiscList = ({
    backgroundColor,
    backgroundImage,
    color,
    imageHeight,
    headerColor,
    children,
    style,
    titleColor
}) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight, headerColor })();

    return (
        <List
            className={[
                classes.list,
                classes[`${'f' + titleColor}`],
                classes[`${style}`],
                classes[`${'h' + headerColor}`]
            ].join(' ')}
        >
            {children}
        </List>
    );
};

JiscList.propTypes = {
    captions: PropTypes.string,
    headerColor: PropTypes.string,
    titleColor: PropTypes.string,
    avatar: PropTypes.string,
    buttonText: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    color: PropTypes.string,
    ShowHeader: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.string
};

JiscList.defaultProps = {
    headerColor: 'blue',
    color: 'white',
    imageHeight: '400px'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscList {...props} />
        </ThemeProvider>
    );
};
