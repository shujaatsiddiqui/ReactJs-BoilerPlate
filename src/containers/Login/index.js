import React from "react";
import Login from "./Login";

import { AuthenticationContext } from "../../components/AuthenticatorHOC";

const LoginWrapper = props => (
  <AuthenticationContext.Consumer>
    {value => <Login context={value} history={props.history} />}
  </AuthenticationContext.Consumer>
);

export default LoginWrapper;
