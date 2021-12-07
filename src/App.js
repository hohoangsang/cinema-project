import { CssBaseline } from "@material-ui/core";
import { ConnectedRouter } from "connected-react-router";
import React from 'react';
import {
  Route, Switch
} from "react-router-dom";
import { NotFound, PrivateRoute} from "./components/common";
import { ClientLayout, AdminLayout } from "./components/layout";
import Loading from "./components/patials/loading/Loading";
import { ADMIN_PATH, ROOT_PATH } from './constant/route';
import './scss/style.scss';
import { history } from "./utils/history";

function App() {
  return (
    <div className="App">
        <ConnectedRouter history={history}>
          <CssBaseline />
          <Loading></Loading>
          <Switch>
              <PrivateRoute path={ADMIN_PATH}>
                <AdminLayout></AdminLayout>
              </PrivateRoute>
              <Route path={ROOT_PATH}>
                <ClientLayout></ClientLayout>
              </Route>
              <Route>
                <NotFound></NotFound>
              </Route>
          </Switch>
        </ConnectedRouter>
    </div>
  );
}

export default App;
