import React from "react";
import Dashboard from "./Dashboard";

import { AuthenticationContext } from "../../components/AuthenticatorHOC";

const LoginWrapper = props => (
  <AuthenticationContext.Consumer>
    {value => <Dashboard context={value} history={props.history} />}
  </AuthenticationContext.Consumer>
);

export default LoginWrapper;
