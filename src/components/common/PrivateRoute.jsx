import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { LOG_IN_PATH } from '../../constant/route'

export function PrivateRoute({component: Component, ...rest }) {
    return (
        <Route {...rest} render = {props => {
            localStorage.getItem('user')
                ? <component {...props} /> 
                : <Redirect to={{ pathname: {LOG_IN_PATH}, state: { from: props.location } }}/>
        }}/>
    )
}
