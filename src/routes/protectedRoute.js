import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../components/AuthenticatorHOC";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthenticationContext.Consumer>
      {(value) => (
        <Route
          {...rest}
          render={(props) =>
            value.authenticationStatus ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: `/auth/login`,
                }}
              />
            )
          }
        />
      )}
    </AuthenticationContext.Consumer>
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType,
};

export default ProtectedRoute;
