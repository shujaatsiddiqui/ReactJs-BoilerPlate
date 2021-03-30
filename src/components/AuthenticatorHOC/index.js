import React, { Component } from "react";
import {
  getAuthTokensFromStorage,
  getUserIdFromStorage,
  setUserInStorage,
} from "../../utils/authUtils";

let authenticationObject = {
  authenticationStatus: false,
  accessToken: "",
  role: "",
  userId: "",
  setAuthenticationStatus: () => {},
};

function setDefaultUser() {
  const accessToken = getAuthTokensFromStorage();
  const userId = getUserIdFromStorage();
  if (accessToken) {
    authenticationObject = {
      authenticationStatus: true,
      accessToken: accessToken,
      userId: userId,
      setAuthenticationStatus: () => {},
    };
  }

  return authenticationObject;
}

const AuthenticationContext = React.createContext(setDefaultUser());

class Authenticator extends Component {
  componentDidMount() {
    const {
      authenticationStatus,
      accessToken,
      userId,
    } = AuthenticationContext._currentValue;
    this.setAuthenticationStatus(authenticationStatus, accessToken, userId);
  }

  constructor(props) {
    super(props);
    this.setAuthenticationStatus = (status, token, userId) => {
      setUserInStorage(token, userId);
      this.setState({
        authenticationStatus: status,
        accessToken: token,
        userId,
        isAuthenticating: false,
      });
    };

    this.state = {
      authenticationStatus: true,
      accessToken: "",
      userId: null,
      isAuthenticating: true,
      setAuthenticationStatus: this.setAuthenticationStatus,
    };
  }
  render() {
    const { children } = this.props;
    const { isAuthenticating } = this.state;
    return (
      <AuthenticationContext.Provider value={this.state}>
        {isAuthenticating ? null : children}
      </AuthenticationContext.Provider>
    );
  }
}

export { AuthenticationContext, Authenticator };
