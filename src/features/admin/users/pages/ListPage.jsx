import { Box, Button, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import userApi from '../../../../apis/userApi';
import { fetchUsersRequest, setFilter, setFilterWithDebounce } from '../../../../redux/action/userManagementAction';
import UserFilter from '../components/UserFilter';
import UserTable from '../components/UserTable';

export function ListPage() {
    const dispatch = useDispatch();
    const { userList, total, filter } = useSelector(state => state.userManagement);
    const match = useRouteMatch();
    const history = useHistory();

    const { cityList, cityMap } = useSelector(state => state.city);

    useEffect(() => {
        dispatch(fetchUsersRequest(filter))
    }, [dispatch, filter]);

    const handlePageChange = (event, page) => {
        dispatch(setFilter({
            ...filter,
            _page: page
        }))
    }

    const handleSearchChange = (newFilter) => {
        dispatch(setFilterWithDebounce(newFilter));
    }

    const handleFilterChange = (newFilter) => {
        dispatch(setFilter(newFilter))
    }

    const handleRemove = async (user) => {
        try {
            const { removeUser } = userApi;
            const selectedUser = {...user};
            await removeUser(user.id);

            //Trigger to re-fetch user list with current filter
            const newFilter = {...filter};
            dispatch(setFilter(newFilter));

            toast.success(`Removed user named ${selectedUser.fullname}!`);
        } catch (error) {
            toast.error("Removed fail!");
            console.log("fail to remove user", error);
        }
    }

    const handleEditUser = async (user) => {
        history.push(`${match.url}/${user.id}`);
    }

    return (
        <Box className="listPage">
            <Box className="listPage__title">
                <Typography variant='h1'>Users</Typography>
                <Link to={`${match.url}/add`}>
                    <Button variant='contained' color='primary'>Add new Users</Button>
                </Link>
            </Box>

            <Box className="listPage__filter" mb={2}>
                {/* UserFilter */}
                <UserFilter
                    onSearchChange={handleSearchChange}
                    onChange={handleFilterChange}
                    filter={filter}
                />

            </Box>

            {/* UserTable */}
            <UserTable 
                userList={userList}
                cityMap={cityMap}
                onRemove={handleRemove}
                onEdit={handleEditUser}
            />

            {/* Pagination */}
            <Pagination 
                count={Math.ceil(total/filter._limit)} 
                page={filter._page} 
                onChange={handlePageChange} 
                color="primary"
                className="listPage__pagination"
            />
        </Box>
    )
}
