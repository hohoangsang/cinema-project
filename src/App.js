import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { NotFound, PrivateRoute } from "./components/common";
import { ClientLayout, AdminLayout } from "./components/layout";
import Loading from "./components/patials/loading/Loading";
import { ADMIN_PATH, ROOT_PATH } from "./constant/route";
import "./scss/style.scss";
import { history } from "./utils/history";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <CssBaseline />
          <Loading></Loading>
          <Switch>
            <PrivateRoute path={ADMIN_PATH}>
              <AdminLayout></AdminLayout>
            </PrivateRoute>
            <Route>
              <ClientLayout></ClientLayout>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </ConnectedRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
