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
    return (
      <>
        <Box>
          <Form id="login-form" onSubmit={this.onLogin}>
            <TextInput id="email" name="email" placeholder="email" />
            <TextInput id="password" name="password" type="password" placeholder="password" />
            <Button margin="small" type="submit" label="Login" />
          </Form>
        </Box>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    userEmail: state.userEmail
  };
};

export default connect(mapStateToProps)(LoginForm);
