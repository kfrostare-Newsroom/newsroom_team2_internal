import React, { Component } from "react";
import auth from "../modules/auth";
import { Form, TextInput, Button, Box } from "grommet";

class LoginForm extends Component {
  onLogin = async event => {
    try {
      event.preventDefault();
      debugger;
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value
      ); debugger
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Box>
        <Form onSubmit={this.onLogin}>
          <TextInput name="email" placeholder="email" />
          <TextInput name="password" type="password" placeholder="password" />
          <Button margin="small" type="submit" label="Login" />
        </Form>
      </Box>
    );
  }
}

export default LoginForm;
