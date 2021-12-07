import React from 'react';
import { Route } from 'react-router-dom';
import { AdminLayout } from '../layout';
import { NotFound } from './NotFound';

export function PrivateRoute(props) {
    const isLoggin = Boolean(sessionStorage.getItem('access_token'));
    const isAdmin = Boolean(sessionStorage.getItem('isAdmin'));

    if( !isLoggin || !isAdmin ) {
        return <Route component={NotFound}></Route>
    }

    return <Route {...props}></Route>
}

