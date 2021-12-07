import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ADMIN_DASHBOARD_PATH, ADMIN_MOVIES_PATH, ADMIN_PATH, ADMIN_USERS_PATH } from '../../constant/route';
import { Header, Sidebar } from '../common';

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '13rem 1fr',
        gridTemplateAreas: `"header header" "sidebar main"`,
        minHeight: '100vh'
    },

    header: {
        gridArea: 'header',
    },
    sidebar: {
        gridArea: 'sidebar',
        borderRight: `1px solid #ddd`,
        backgroundColor: theme.palette.background.paper,
        
    },
    main: {
        gridArea: 'main',
        backgroundColor: theme.palette.background.paper,
    }
}))

export function AdminLayout() {
    const classes = useStyle();

    const Dashboard = React.lazy(() => import('../../features/admin/dashboard/Dashboard'));
    const Users = React.lazy(() => import('../../features/admin/users'));
    const Movies = React.lazy(() => import('../../features/admin/movies/Movies'));

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Header></Header>
            </Box>
            <Box className={classes.sidebar}>
                <Sidebar></Sidebar>
            </Box>
            <Box component='main' className={`${classes.main} mainManagement`}>
                <Switch>
                    <Route path = {ADMIN_DASHBOARD_PATH}>
                        <Dashboard></Dashboard>
                    </Route>
                    <Route path = {ADMIN_USERS_PATH}>
                        <Users></Users>
                    </Route>
                    <Route path = {ADMIN_MOVIES_PATH}>
                        <Movies></Movies>
                    </Route>
                </Switch>
            </Box>
        </Box>
    )
}
