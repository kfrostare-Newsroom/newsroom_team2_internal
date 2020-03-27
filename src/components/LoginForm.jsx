import React, { Component } from "react";
import auth from "../modules/auth";
import { Form, TextInput, Button, Box } from "grommet";
import { connect } from "react-redux";

class LoginForm extends Component {
  onLogin = async event => {
    try {
      event.preventDefault();
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value
      );

      this.props.dispatch({
        type: "LOGIN",
        payload: {
          authenticated: true,
          userEmail: response.data.email,
          firstPage: true
        }
      });
    } catch (error) {}
  };
  render() {
    let login;
    if (this.props.authenticated) {
      login = (
        <>
          <p>Hello {this.props.userEmail}</p>
        </>
      );
      debugger;
    } else {
      login = (
        <>
          <Box>
            <Form onSubmit={this.onLogin}>
              <TextInput name="email" placeholder="email" />
              <TextInput
                name="password"
                type="password"
                placeholder="password"
              />
              <Button margin="small" type="submit" label="Login" />
            </Form>
          </Box>
        </>
      );
      debugger;
    }

    return { login };
  }
}
const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    userEmail: state.userEmail
  };
};

export default connect(mapStateToProps)(LoginForm);
