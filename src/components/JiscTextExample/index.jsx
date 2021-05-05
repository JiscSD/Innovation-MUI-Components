import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Container, Typography } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ backgroundImage, backgroundColor }) => {
    return makeStyles((theme) => {
        return {
            button: {
                backgroundColor: '#f40',
            },
            imageContainer: {
                backgroundColor: theme.palette.jisc[backgroundColor],
                backgroundImage: backgroundImage && `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 160,
                maxWidth:'35vw', /* remove if needed */
                position:'relative',
                display: 'table',
                "& $svg": {
                    opacity: 0.1,
                    position: 'absolute',
                    right: -80,
                    bottom:0
                },
            },
            textContainer: {
                color: 'white',
                fontSize: 16,
                textAlign: 'center',
                display: 'table-cell',
                verticalAlign: 'middle',
                fontStyle: 'italic'
            },
            cardAction: {
                backgroundColor: '#fff',
                height: 50,
                width: '100%',
                paddingTop: 10,
                position: 'absolute',
                left:0,
                bottom:-50,
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.13)',
                "& $cardButton": {
                    display: 'none'
                },
            },
            cardTitle: {
                color: '#181818',
                fontWeight: 'bold',
                fontSize: 15,
            },
            cardText: {
                fontSize: 13,
                lineHeight: '1.6em'
            },
            twitter: {
                backgroundColor: '#26A6D1',
                backgroundSize: '56px',
                backgroundImage: '',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'calc(100% - 10px) 90px',
                "& $iconTweet": {
                    display: 'block'
                },
            },
            essay: {
                backgroundColor: '#4ABBA4',
                backgroundSize: '56px',
                backgroundImage: 'url("https://www.flaticon.com/svg/vstatic/svg/1803/1803690.svg?token=exp=1618303813~hmac=f7719cbff255cd4896c0b4f6cfcade25")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'calc(100% - 10px) 90px',
                "& $iconEssay": {
                    display: 'block'
                },
            },
            film: {
                backgroundColor: '#BA618A',
                backgroundSize: '56px',
                backgroundImage: 'url("https://www.flaticon.com/svg/vstatic/svg/860/860349.svg?token=exp=1618304199~hmac=6e8df57ac50ff65d9825598911838efc")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'calc(100% - 10px) 90px',
                "& $iconFilm": {
                    display: 'block'
                },
            },
        };
    });
};

const JiscTextExample = ({ exampleText, exampleTextType, cardCategory, backgroundColor, backgroundImage, imageHeight, showTwitter, showEssay, showFilm, showAction }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, imageHeight })();  

    return (
        <Container
            container
            direction='column'
            justify='flex-end'
            alignItems='flex-end'
            backgroundImage={backgroundImage}
            className={[classes.imageContainer, classes[`${cardCategory}`]].join(' ')}
        >

            {showTwitter && (
                <svg className={classes.iconTweet} xmlns="http://www.w3.org/2000/svg" width="216.762" height="176.173" viewBox="0 0 216.762 176.173"><path id="iconTweet" d="M223.262,28.486a89.01,89.01,0,0,1-25.542,7.009,44.667,44.667,0,0,0,19.563-24.6,88.987,88.987,0,0,1-28.251,10.784,44.491,44.491,0,0,0-75.776,40.553A126.311,126.311,0,0,1,21.6,15.77,44.535,44.535,0,0,0,35.365,75.144a44.39,44.39,0,0,1-20.123-5.564c-.488,20.592,14.288,39.866,35.675,44.165a44.569,44.569,0,0,1-20.087.759,44.531,44.531,0,0,0,41.546,30.871A89.5,89.5,0,0,1,6.5,163.818,125.78,125.78,0,0,0,74.654,183.8c82.586,0,129.226-69.743,126.408-132.3A89.653,89.653,0,0,0,223.262,28.486Z" transform="translate(-6.5 -7.623)" fill="#fff"/></svg>
            )}

            {showFilm && (
                <svg className={classes.iconFilm} xmlns="http://www.w3.org/2000/svg" width="222.608" height="214.153" viewBox="0 0 222.608 214.153"><path id="iconFilm" d="M161.683,1V15.7h-14.7V1h-14.7V30.4H44.1V1H29.4V15.7H14.7V1H0V162.683H14.7v-14.7H29.4v14.7H44.1v-29.4h88.191v29.4h14.7v-14.7h14.7v14.7h14.7V1ZM29.4,133.286H14.7v-14.7H29.4Zm0-29.4H14.7v-14.7H29.4Zm0-29.4H14.7v-14.7H29.4Zm0-29.4H14.7V30.4H29.4Zm102.889,66.143H44.1V52.445h88.191Zm29.4,22.048h-14.7v-14.7h14.7Zm0-29.4h-14.7v-14.7h14.7Zm0-29.4h-14.7v-14.7h14.7Zm0-29.4h-14.7V30.4h14.7Z" transform="translate(-0.358 62.276) rotate(-21)" fill="#fff"/></svg>
            )}

            {showEssay && (
                <svg className={classes.iconEssay} xmlns="http://www.w3.org/2000/svg" width="176.381" height="211.656" viewBox="0 0 176.381 211.656"><path id="iconEssay" d="M93.789,114.928c10.212-.547,25.17-3.422,36.864-9.948A286.122,286.122,0,0,0,150.266,69.7a72.481,72.481,0,0,1-24.129-2.266c9.419-1.614,21.236-4.983,30.179-10.724,11.068-15.733,19.27-41.088,22.065-56.7-25.346-.423-49.087,7.849-65.138,18.2-5.415,6.173-10.107,21.069-11.218,28.953-2.443-5.7-4.224-14.816-2.134-22.418-12.858,6.764-24.1,14.49-36.837,25.223C56.7,63.451,55.7,78.991,56.281,87.686c-3.448-4.877-8.069-14.375-7.426-24.773C26.014,85,10.255,113.923,25.2,145.142c16.571-17.118,35.62-33.363,47.217-40.912C45.646,134.868,20.688,175.2,2,211.656l22.083-6.932c9.56-17.453,18.158-32.489,25.866-43.258,28.477,3.73,53.761-19.12,70.8-42.287C113.958,120.855,100.941,118.668,93.789,114.928Z" transform="translate(-2 0)" fill="#fff"/></svg>
            )}

            <Typography item className={classes.textContainer}>{exampleText}</Typography>
            
            {showAction && (
                <Container className={classes.cardAction}>
                    <Typography className={classes.cardTitle} >{exampleTextType}</Typography>
                </Container>
            )}
            
        </Container>
    
       
    );
};

JiscTextExample.propTypes = {
    altTitle: PropTypes.string,
    exampleText: PropTypes.string,
    buttonText: PropTypes.string,
    exampleTextType: PropTypes.string,
    cardCategory: PropTypes.oneOf(['twitter', 'essay', 'film']),
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    cardText: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node,
    imageHeight: PropTypes.string,
    showTwitter: PropTypes.bool,
    showFilm: PropTypes.bool,
    showEssay: PropTypes.bool,
    showAction: PropTypes.bool
};

JiscTextExample.defaultProps = {
    altTitle: 'credit card background',
    backgroundColor: 'blue',
    color: 'white',
    imageHeight: '400px'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscTextExample {...props} />
        </ThemeProvider>
    );
};
