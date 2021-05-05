import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Container, Grid, Typography } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundImage, backgroundColor }) => {
    return makeStyles((theme) => {
        return {
            cardRow: {
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.13)'
            },
            imageContainer: {
                backgroundColor: theme.palette.jisc[backgroundColor],
                backgroundImage: backgroundImage && `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '30%',
                position: 'relative',
                padding: '0px',
                display: 'inherit'
            },
            textContainer: {
                fontSize: 16,
                paddingTop: '15px',
                paddingLeft: '24px'
            },
            cardTitle: {
                color: '#181818',
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: 15
            },
            cardText: {
                color: '#181818',
                textAlign: 'left',
                fontSize: 13
            },
            version2: {
                padding: '20px',
                '& img': {
                    borderRadius: 10
                },
                '& $textContainer': {
                    paddingTop: 0
                }
            },
            version3: {
                '& $imageContainer': {
                    maxWidth: '70%',
                    width: '70%',
                    flexBasis: '70%'
                },
                '& $textContainer': {
                    maxWidth: '30%',
                    width: '24%',
                    padding: '3%',
                    flexBasis: '30%'
                }
            },
            version4: {
                '& $imageContainer': {
                    maxWidth: '70%',
                    width: '70%',
                    position: 'relative',
                    left: '30%',
                    flexBasis: '70%'
                },
                '& $textContainer': {
                    maxWidth: '30%',
                    width: '24%',
                    position: 'relative',
                    right: '70%',
                    padding: '3%',
                    flexBasis: '30%'
                }
            }
        };
    });
};

const JiscCardRow = ({
    exampleText,
    cardText,
    cardCategory,
    backgroundColor,
    backgroundImage,
    cardTitle,
    color,
    imageHeight
}) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight })();

    return (
        <Container maxWidth='md'>
            <Grid container className={[classes.cardRow, classes[`${cardCategory}`]].join(' ')}>
                <Grid item xs={4} className={classes.imageContainer}>
                    <img className={classes.cardImage} width='100%' src={exampleText} />
                </Grid>
                <Grid item xs={8} className={classes.textContainer}>
                    <Typography className={classes.cardTitle}>{cardTitle}</Typography>
                    <Typography className={classes.cardText}>{cardText}</Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

JiscCardRow.propTypes = {
    cardTitle: PropTypes.string,
    cardText: PropTypes.string,
    cardImage: PropTypes.string,
    exampleTextType: PropTypes.string,
    cardCategory: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    imageHeight: PropTypes.string
};

JiscCardRow.defaultProps = {
    backgroundColor: '#fff',
    color: 'white',
    imageHeight: '400px'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscCardRow {...props} />
        </ThemeProvider>
    );
};
