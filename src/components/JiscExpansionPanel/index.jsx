import React from 'react';
import {
    makeStyles,
    ThemeProvider,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Container
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import jiscTheme from '../../theme';

const useStyles = ({ titleColor }) =>
    makeStyles((theme) => ({
        panel: {
            borderTop: `1px solid ${theme.palette.jisc.midGrey}`,
            borderBottom: `1px solid ${theme.palette.jisc.midGrey}`
        },
        title: {
            color: theme.palette.jisc.blue,
            '&:hover': {
                color: theme.palette.jisc.orange,
                borderColor: theme.palette.primary.main
            }
        },
        expandIcon: {
            order: -1
        },
        expanded: {
            backgroundColor: theme.palette.jisc.additionalGrey
        },
        details: {
            display: 'block',
            padding: theme.spacing(2)
        }
    }));

const JiscExpansionPanel = ({ title, titleColor, children }) => {
    const classes = useStyles({
        titleColor
    })();

    return (
        <Container maxWidth='md'>
            <ExpansionPanel square elevation={0} className={classes.panel}>
                <ExpansionPanelSummary
                    IconButtonProps={{ edge: 'start' }}
                    classes={{ expanded: classes.expanded, expandIcon: classes.expandIcon }}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography className={classes.title} variant='body2'>
                        {title}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={`${classes.expanded} ${classes.details} `}>
                    {children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Container>
    );
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscExpansionPanel {...props} />
        </ThemeProvider>
    );
};
