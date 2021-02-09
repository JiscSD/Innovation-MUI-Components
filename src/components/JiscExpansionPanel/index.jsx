import React from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
    ThemeProvider,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Container
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import jiscTheme from '../../theme.js';

const useStyles = makeStyles((theme) => ({
    details: {
        display: 'block',
        padding: theme.spacing(2)
    },
    expanded: {
        backgroundColor: theme.palette.jisc.additionalGrey
    },
    expandIcon: {
        order: -1
    },
    panel: {
        borderTop: `1px solid ${theme.palette.jisc.midGrey}`
    },
    title: {
        '&:hover': {
            borderColor: theme.palette.primary.main,
            color: theme.palette.jisc.orange
        },
        color: theme.palette.jisc.primary
    },
    root: {
        '&:last-of-type $panel': {
            borderBottom: `1px solid ${theme.palette.jisc.midGrey}`
        }
    }
}));

const JiscExpansionPanel = ({ title, children }) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Accordion square elevation={0} className={classes.panel}>
                <AccordionSummary
                    IconButtonProps={{ edge: 'start' }}
                    classes={{ expanded: classes.expanded, expandIcon: classes.expandIcon }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className={classes.title} variant='body2'>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className={`${classes.expanded} ${classes.details} `}>
                    {children}
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

JiscExpansionPanel.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscExpansionPanel {...props} />
        </ThemeProvider>
    );
};
