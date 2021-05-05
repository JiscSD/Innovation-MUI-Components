import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Container, Grid, Typography } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundImage, backgroundColor }) => {
    return makeStyles((theme) => {
        return {
            imageContainer: {
                backgroundColor: theme.palette.jisc[backgroundColor],
                backgroundImage: backgroundImage && `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position:'relative',
                display: 'table',
                borderColor: '#1DD688',
                border: 2,
                borderStyle: 'solid', 
                padding:100
            },
            textContainer: {
                color: 'black',
                fontSize: 16,
                textAlign: 'center',
                display: 'table-cell',
                verticalAlign: 'middle',
                fontStyle: 'italic'
            },
            cardAction: {
                backgroundColor: '#1DD688',
                minHeight: 40,
                width: '99%',
                paddingTop: 10,
                color: '#fff',
                textAlign: 'left',
                paddingLeft:'1%',
                position: 'absolute',
                left:0,
                bottom:-40,
                fontWeight: 'bold',
                fontSize: 15,
            },
            neutral: {
                borderColor: '#3B88FD',
                "& $cardAction": {
                    backgroundColor: '#3B88FD',
                },
                "& $circle": {
                    backgroundColor: '#3B88FD',
                }
            },
            positive: {
                borderColor: '#1DD688',
                "& $cardAction": {
                    backgroundColor: '#1DD688',
                },
                "& $circle": {
                    backgroundColor: '#1DD688',
                }
            },
            negative: {
                borderColor: '#FE0044',
                "& $cardAction": {
                    backgroundColor: '#FE0044',
                },
                "& $circle": {
                    backgroundColor: '#FE0044',
                }
            },
            circle: {
                backgroundColor: '#1DD688',
                paddingTop: 7,
                height:33,
                width:40,
                borderRadius: 100,
                textAlign: 'center',
                position:'absolute',
                top: 30,
                right: 30
            }
        };
    });
};

const JiscResultsBox = ({ exampleText, exampleTextType, cardCategory, backgroundColor, backgroundImage, color, imageHeight }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight })();  

   
         

    return (
        <Container
            container
            direction='column'
            justify='flex-end'
            alignItems='flex-end'
            backgroundImage={backgroundImage}
            className={[classes.imageContainer, classes[`${cardCategory}`]].join(' ')}
        >
            <div className={classes.circle}><svg id="icon_action_check_circle_24px_" data-name="icon/action/check_circle_24px " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect id="Boundary" width="24" height="24" fill="none"/><path id="_Color" data-name=" ↳Color" d="M5.727,11.075l-4.3-4.388L0,8.149,5.727,14,18,1.463,16.568,0Z" transform="translate(3 5)" fill="#fff"/></svg></div>

            <Typography item className={classes.textContainer}>{exampleText}</Typography>
            <Typography className={classes.cardAction}>{exampleTextType}</Typography>

        </Container>
    );
};

JiscResultsBox.propTypes = {
    altTitle: PropTypes.string,
    exampleText: PropTypes.string,
    exampleTextType: PropTypes.string,
    cardCategory: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    imageHeight: PropTypes.string
};

JiscResultsBox.defaultProps = {
    altTitle: 'credit card background',
    backgroundColor: '#fff',
    color: 'white',
    imageHeight: '400px'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscResultsBox {...props} />
        </ThemeProvider>
    );
};
