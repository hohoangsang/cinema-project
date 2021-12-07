import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { capitalizeString } from '../../../../utils/common';

export default function UserTable({ userList, onRemove, onEdit, cityMap }) {
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const { filter } = useSelector(state => state.userManagement)

    const calculateOrdinalNumber = (index) => {
        return ((filter._limit * (filter._page - 1)) + index + 1);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickRemove = (user) => {
        setSelectedUser(user);
        setOpen(true);
        console.log(open);
    }

    const handleClickRemoveConfirm = (user) => {
        if(!onRemove) return;

        onRemove(user);
        setOpen(false);
    }

    return (
        <>
            <TableContainer component={Paper} className="listPage__table">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            <TableCell align="center">Full Name</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">City</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="row">{calculateOrdinalNumber(index)}</TableCell>
                                <TableCell align="center">{user.fullname}</TableCell>
                                <TableCell align="center">{capitalizeString(user.gender)}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">{cityMap[user.city]?.name}</TableCell>
                                <TableCell align="center">{user.phone_number}</TableCell>
                                <TableCell align="right">
                                    <Button variant='contained' color='primary' onClick={() => onEdit(user)}>Edit</Button>
                                    <Button variant='contained' color='secondary' onClick={() => handleClickRemove(user)}>Remove</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Remove Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Remove User?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to remove user named "{selectedUser.fullname}"? <br/>
                        This action can&apos;t be undo.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="default">
                        Cancel
                </Button>
                    <Button onClick={() => handleClickRemoveConfirm(selectedUser)} color="secondary" variant="contained" autoFocus>
                        Remove
                </Button>
                </DialogActions>
            </Dialog>
        </>
    );

}