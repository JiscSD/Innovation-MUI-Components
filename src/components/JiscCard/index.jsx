import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Card } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundColor }) => {
    return makeStyles((theme) => {
        return {
            root: {},
            card: {
                maxWidth: '35vw'
            },
            style2: {},
            style3: {},
            '@global': {
                // Style 2
                
                '[class*="MuiButtonBase"]:focus [class*="MuiCardActionArea-focusHighlight"]': {
                    opacity: '0.8',
                    background: 'transparent',
                    border: '4px',
                    borderColor: '#4BE5B0',
                    borderStyle: 'solid'
                },
                '[class*="style2"]  [class*="MuiCardContent-root"], [class*="style2"] [class*="MuiCardContent-root"] p, [class*="style2"]  [class*="MuiCardActions-root"], [class*="style2"]  [class*="MuiCardActions-root"] button': {
                    backgroundColor: '#37444D',
                    color: 'white'
                },

                // Style 3
                '[class*="style3"]  [class*="MuiCardContent-root"], [class*="style3"] [class*="MuiCardContent-root"] p, [class*="style3"]  [class*="MuiCardActions-root"], [class*="style3"]  [class*="MuiCardActions-root"] button': {
                    backgroundColor: 'purple',
                    color: 'white'
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
        <React.Fragment>
            <ThemeProvider theme={jiscTheme}>
                <JiscCard {...props} />
            </ThemeProvider>
        </React.Fragment>
    );
};
