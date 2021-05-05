import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import jiscTheme from '../../theme.js';

const useStyles = ({ }) => {
    return makeStyles((theme) => {
        return {
            table: {
                maxWidth:1000 /* remove if needed */,
                margin: 'auto',
                '& th': {
                    color:'white',
                    backgroundColor: '#007dba',
                  },
            },
            style4: {
                '& th': {
                    backgroundColor: 'purple',
                    borderColor: '#973f97'
                  },
                '& td': {
                    backgroundColor: '#973f97',
                    color: 'white',
                    borderColor: '#973f97'
                },
            },
            style3: {
                '& th': {
                    backgroundColor: 'green',
                    borderColor: '#1e911e'
                  },
                '& td': {
                    backgroundColor: '#1e911e',
                    color: 'white',
                    borderColor: '#1e911e'
                },
            },
            style2: {
                '& th': {
                    backgroundColor: '#007dba'
                  },
                '& tr': {
                '&:nth-of-type(odd)': {
                    backgroundColor: '#EBF1F2'
                  },
                },
            }
        };
    });
};

const JiscTable = ({ backgroundColor, backgroundImage, color, imageHeight, children, style }) => {
    const classes = useStyles({ backgroundColor, backgroundImage, color, imageHeight })();  

  
    return (
        <TableContainer>
            <Table className={[classes.tableType, classes.table, classes[`${style}`]].join(' ')}>

                 {children}

            </Table>
        </TableContainer>
    );
};

JiscTable.propTypes = {
    altTitle: PropTypes.string,
    exampleText: PropTypes.string,
    buttonText: PropTypes.string,
    exampleTextType: PropTypes.string,
    style: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    cardText: PropTypes.string,
    color: PropTypes.string,
    imageHeight: PropTypes.string
};

JiscTable.defaultProps = {
    altTitle: 'credit card background',
    backgroundColor: 'blue',
    color: 'white',
    imageHeight: '400px'
};

export default (props) => {
    return (
        <ThemeProvider theme={jiscTheme}>
            <JiscTable {...props} />
        </ThemeProvider>
    );
};
