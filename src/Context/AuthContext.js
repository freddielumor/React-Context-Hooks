import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  };

  toggleAuth = () => {
    const { isAuthenticated } = this.state;

    this.setState({
      isAuthenticated: !isAuthenticated,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
