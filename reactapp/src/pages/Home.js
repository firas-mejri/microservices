import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, TableBody, TableRow, TableCell} from '@material-ui/core';

const style = {
    height: '100px',
    width: '60%',
    marginLeft: "20%",
    marginTop: "0.5em",
    marginBottom: "0.5em",
  };

export default () => (
    <Fragment>
        <Table style={{width: "33%", marginLeft: "33%", marginTop: "10%"}}>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Button variant="outlined" style={style} size='large' color='primary' component={Link} to='/cnam'> Remboursement CNAM </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Button variant="outlined" style={style} size='large' color='primary' component={Link} to='/b3'> Bulletin n 3 </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Button variant="outlined" style={style} size='large' color='primary' component={Link} to='/declaration-revenu'> Declaration des Revenus </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Fragment>
);