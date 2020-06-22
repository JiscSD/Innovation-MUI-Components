import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        '&:hover': {
            cursor: 'pointer',
            opacity: '.7'
        },
        '&:focus': {
            outline: 'solid #fd6',
            borderRadius: '0',
            opacity: '.7'
        }
    }
}));

const JiscLogo = ({ linkTo, height, svgTitle }) => {
    const classes = useStyles();
    const history = useHistory();

    const redirectToHome = () => {
        history.push(linkTo);
    };

    return (
        <svg
            className={classes.root}
            onClick={redirectToHome}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 999.9 999.9'
            height={height}
            role='link'
            title={svgTitle}
            data-testid='jisc-logo'
            tabIndex='0'
        >
            <path fill='#e85e13' d='M0 0h999.9v999.9H0z' />
            <path
                fill='#fff'
                d='M305.8 554c0 80.1-46.8 119.7-113.4 119.7-52.1 0-85.9-24.1-108.1-54.5l39.1-40c19.8 25.1 39.5 39.6 68 39.6 31.8 0 53.6-21.2 53.6-66.1V331.1h60.8zm107.6 114.8H355V414h58.4zm-29.5-283.6c-21 0-38-17-38.1-37.9 0-21 17-38 37.9-38.1s38 17 38.1 37.9v.1c.1 21-16.9 38-37.9 38zm263.4 208.3c0 53.5-41.5 80.1-94.6 80.1-36.2 0-76.2-13-108.1-38.1l26.1-39.5c27.5 20.7 57.4 31.4 83.5 31.4 25.1 0 39.5-10.6 39.5-27.5v-1c0-19.8-27-26.5-56.9-35.7-37.6-10.6-79.6-26-79.6-74.8v-1c0-48.2 40.1-77.7 90.7-77.7 31.8 0 66.6 11.1 93.6 29l-23.2 41.5c-24.6-14.9-50.7-24.1-71.9-24.1-22.7 0-35.7 10.6-35.7 25.6v1c0 18.3 27.5 26 57.4 35.7 37.1 11.6 79.1 28.5 79.1 74.3zm157.8 81.1c-75.8 0-131.7-59.3-131.7-132.2s56-133.6 132.2-133.6c48.3 0 78.2 17.9 101.8 43.9l-36.2 39.1C853.4 473 834.5 460 805.1 460c-42.5 0-73.3 36.7-73.3 81.5 0 45.8 31.4 82.5 76.2 82.5 27.5 0 47.8-13 66.1-31.8l35.2 34.8c-25.1 27.8-54.5 47.6-104.2 47.6z'
            />
        </svg>
    );
};

JiscLogo.propTypes = {
    linkTo: PropTypes.string,
    height: PropTypes.string,
    svgTitle: PropTypes.string
};

JiscLogo.defaultProps = {
    linkTo: '/',
    height: '40px',
    svgTitle: 'Go to the homepage'
};

export default JiscLogo;
