import { Box } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { fetchAllCityRequest } from '../../../redux/action/cityAction'
import { AddEditPage } from './pages/AddEditPage'
import { ListPage } from './pages/ListPage'

function Users() {
    const match = useRouteMatch()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCityRequest());
    }, []) 

    return (
        <Box className="userManagement">
            <Switch>
                <Route path={match.path} exact>
                    <ListPage></ListPage>
                </Route>
                <Route path={`${match.path}/add`}>
                    <AddEditPage></AddEditPage>
                </Route>
                <Route path={`${match.path}/:userId`}>
                    <AddEditPage></AddEditPage>
                </Route>
            </Switch>
        </Box>
    )
}

export default Users
