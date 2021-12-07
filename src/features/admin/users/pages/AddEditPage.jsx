import { Box, Typography } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import userApi from '../../../../apis/userApi';
import { ADMIN_USERS_PATH, default_avatar } from '../../../../constant/route';
import UserForm from '../components/UserForm';

export function AddEditPage() {
    const { userId } = useParams();
    const isEdit = Boolean(userId);
    const [user, setUser] = useState();
    const history = useHistory();

    const initialValues = {
        id: '',
        fullname: '',
        birthday: '',
        phone_number: '',
        email: '',
        gender: '',
        ...user
    }

    const handleUserSubmit = async (formValues) => {
        if(isEdit) {
            await userApi.updateUser(formValues)
        } else {
            const newFormValues = {
                ...formValues,
                isAdmin: false,
                default_avatar: default_avatar,
                password: "123456"
            }

            await userApi.addUser(newFormValues);
        }

        history.push(ADMIN_USERS_PATH);
    }

    useEffect(() => {
        if(!userId) return;

        (async () => {
            try {
                const { getUserById } = userApi;
                const {data} = await getUserById(userId);
                setUser(data);
            } catch (error) {
                console.log('Fail to fetch user', error)
            }
        })()
    }, [userId])

    return (
        <Box className="addEditPage">
            <Link to={ADMIN_USERS_PATH} style={{textDecoration: "underline"}}>
                <Typography variant="caption" className="addEditPage__caption">
                    <ChevronLeft/> Back to user list
                </Typography>
            </Link>

            <Typography variant="h1" className="addEditPage__title">
                {
                    isEdit ? "Update user info" : "Add new user"
                }
            </Typography>

            {
                ((!isEdit || Boolean(user)) && (
                    <Box className="addEditPage__form">
                        <UserForm
                            initialValues={initialValues}
                            onSubmit={handleUserSubmit}
                        />
                    </Box>
                ))
            }

        </Box>
    )
}
