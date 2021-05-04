import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, List } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ headerColor }) => {
    return makeStyles((theme) => {
       
        return {
            list: {
                maxWidth:'35vw', /* remove if needed */
                backgroundColor: 'white',
                margin: 'auto',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.13)',
                padding:0,
                "& .MuiListSubheader-root": {
                    backgroundColor: '#37444D',
                    color: 'white   '
                },
            },
            fpurple: {   
                "& .MuiListItem-root": {
                    color: 'purple   ',
                },
            },
            forange: {   
                "& .MuiListItem-root": {
                    color: 'orange   ',
                },
            },
            fgreen: {   
                "& .MuiListItem-root": {
                    color: 'green   ',
                },
            },
            orange: {
                "& .MuiListSubheader-root": {
                    backgroundColor: 'orange',
                },
            },
            green: {
                "& .MuiListSubheader-root": {
                    backgroundColor: 'green',
                },
            },
            purple: {
                "& .MuiListSubheader-root": {
                    backgroundColor: 'purple',
                },
            },
            listText: {
                paddingTop:3,
                paddingBottom:3,
            },
            style2: {
                "& .MuiListItem-root": {
                 borderBottomStyle:'solid',
                 borderWidth:1,
                 borderColor:'#ccc'
                }
            },
            style3: {
                "& .MuiListItem-root": {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#EBF1F2'
                    },
                }
            },
            style4: {
                "& .MuiListItem-root": {
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#EBF1F2'
                    },
                }
            }
        };
    });
};

const JiscList = ({ backgroundColor, backgroundImage, color, imageHeight, headerColor, showAvatar, children, style, titleColor }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight, headerColor })();  

    return (
        <List className={[classes.list, classes[`${"f" + titleColor}`], classes[`${style}`], classes[`${headerColor}`]].join(' ')} >
 
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
    showAvatar: PropTypes.bool,
    ShowHeader: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.string
};

JiscList.defaultProps = {
    altTitle: 'credit card background',
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
