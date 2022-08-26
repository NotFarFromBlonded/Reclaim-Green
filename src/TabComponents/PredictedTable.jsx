import React from 'react'
import '../App.css';
import {
    makeStyles,
    createTheme,
    ThemeProvider,
    Container,
    TableContainer,
    TableHead,
    TableRow,
    Table,
    TableCell,
    TableBody,
    Paper,
  } from '@material-ui/core';
import { EmissionState } from '../Context';

const useStyles = makeStyles(()=>({
    noOfEntriesField: {
        margin: 20,
        width: "100%"
    },
    progress: {
        color:"black"
    },
    tablehead: {
        backgroundColor: "black"
    },
    columnshead: {
        backgroundColor: 'black',
        color: "white",
        fontFamily: ['"B612 Mono"','monospace'].join(','),
        fontWeight: "bold",
    },
    row: {
        display: "flex",
    },
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
        backgroundColor: '#191919',
        maxWidth: "360px",
        margin: "auto" 
    },
    rowNew: {
        color: 'white',
        border: '1px solid #ffffff4a'
    },
    pagination: {
        background: 'black',
        color: 'white'
    },
    table: {
        marginTop: '4rem'
    }   
}))

const PredictedTable = () => {
    const classes = useStyles();
    const {predictedValues} = EmissionState()
    const theme = createTheme({
        palette: {
            type: 'light'
        },
    })

    return (
        <>
        <ThemeProvider theme = {theme}>
            <div className={classes.table}>
            <Container style={{ textAlign: 'center' }} >
                <Paper >
                        <p>Predicted Values:(अनुमानित मूल्य:)</p>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table" >
                                <TableHead >
                                    <TableRow>
                                    {['Year', 'Values'].map((column) => (
                                        <TableCell
                                        key={column}
                                        align={
                                            'center'
                                        }
                                        className={classes.columnshead}
                                        >
                                        {column}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {predictedValues.map((row, index) => {
                                            return(
                                                <TableRow key = {index} >
                                                    <TableCell
                                                        component="th"
                                                        scope="row"
                                                        align="center"
                                                        key = {row.year}
                                                        className={classes.rowNew}
                                                    >
                                                        <div style={{ display: 'flex' }}>
                                                            <span>{row.year}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell
                                                        align="center"
                                                        key = {row.value}
                                                        className={classes.rowNew}
                                                    >
                                                        <div style={{display: 'flex'}}>
                                                            <span>{row.value}</span>
                                                        </div>
                                                    </TableCell>
                                                    
                                                </TableRow>
                                            );
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                </Paper>
            </Container>
            
            </div>
        </ThemeProvider>
        </>
    )
}

export default PredictedTable
