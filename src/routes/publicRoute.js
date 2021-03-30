import { PropTypes } from "prop-types";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../components/AuthenticatorHOC";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthenticationContext.Consumer>
      {(value) => (
        <Route
          {...rest}
          render={(props) =>
            value.authenticationStatus ? (
              <Redirect
                to={{
                  pathname: "/admin/dashboard",
                }}
              />
            ) : (
              <Component {...props} />
            )
          }
        />
      )}
    </AuthenticationContext.Consumer>
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType,
};

export default PublicRoute;
