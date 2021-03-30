import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Authenticator } from "../components/AuthenticatorHOC";
import AdminLayout from "layouts/Admin";
import AuthLayout from "layouts/Auth";

const Routes = () => (
  <Authenticator>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect from="/" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  </Authenticator>
);
export default Routes;
