import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Card } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundColor }) => {
    return makeStyles((theme) => {
        return {
            root: {
                backgroundColor: '#f40',
            },
            card: {
                maxWidth:'35vw'
            },
            style2: {
                "& .MuiCardContent-root": {
                    backgroundColor: '#37444D',
                    color: 'white',
                    "& p": {
                        color: 'white'
                    },
                },
                "& .MuiCardActions-root": {
                    backgroundColor: '#445560;',
                    "& button": {
                        color:'white'
                    }
                }
            },
            style3: {
                position: 'relative',
                "& .MuiCardMedia-root": {
                },
                "& .MuiCardContent-root": {
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    "& p": {
                        color: 'white'
                    },
                },
                "& .MuiCardActions-root": {
                    backgroundColor: '#ccc',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    "& button": {
                        color:'white'
                    }
                }
            }
        };
    });
};

const JiscCard = ({ children, cardCategory, backgroundColor, backgroundImage, color, imageHeight }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight })();  

    return (

        <Card className={[classes.card, classes[`${cardCategory}`]].join(' ')} >

            {children}

        </Card>
       
    );
};

JiscCard.propTypes = {
    altTitle: PropTypes.string,
    exampleText: PropTypes.string,
    buttonText: PropTypes.string,
    exampleTextType: PropTypes.string,
    cardCategory: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    cardText: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    imageHeight: PropTypes.string
};

JiscCard.defaultProps = {
    altTitle: 'credit card background',
    backgroundColor: 'blue',
    color: 'white',
    imageHeight: '400px'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscCard {...props} />
        </ThemeProvider>
    );
};
