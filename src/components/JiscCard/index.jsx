import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Card } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundColor }) => {
    return makeStyles((theme) => {
        return {
            root: {
                backgroundColor: '#f40'
            },
            card: {
                maxWidth: '35vw',

                '& :focus': {
                    '& .MuiCardActionArea-focusHighlight': {
                        opacity: 0.8,
                        border: 4,
                        borderStyle: 'solid',
                        borderColor: '#4BE5B0',
                        background: 'transparent'
                    }
                },
                '& .MuiCardActionArea-root': {
                    opacity: 1
                }
            },
            style2: {
                '& .MuiCardContent-root': {
                    backgroundColor: '#37444D',
                    color: 'white',
                    '& p': {
                        color: 'white'
                    }
                },
                '& .MuiCardActions-root': {
                    backgroundColor: '#445560;',
                    '& button': {
                        color: 'white'
                    }
                }
            },
            style3: {
                position: 'relative',
                '& .MuiCardMedia-root': {},
                '& .MuiCardContent-root': {
                    backgroundColor: 'purple',
                    color: 'white',
                    '& p': {
                        color: 'white'
                    }
                },
                '& .MuiCardActions-root': {
                    backgroundColor: 'purple',
                    '& button': {
                        color: 'white'
                    }
                }
            }
        };
    });
};

const JiscCard = ({ children, cardCategory, backgroundColor, backgroundImage, color, imageHeight }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight })();

    return <Card className={[classes.card, classes[`${cardCategory}`]].join(' ')}>{children}</Card>;
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
