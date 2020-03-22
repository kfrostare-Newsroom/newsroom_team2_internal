import React, { Component } from "react";
import { connect } from "react-redux";
import { TextArea, TextInput, Button, Form } from "grommet";

class CreateArticle extends Component {

  articleCreation() {
    debugger
  }


  render() {
    return (
      <>
        <h1>Let's create som magic...</h1>
        <Form className="create-article" onSubmit={this.articleCreation.bind(this)}>
          <TextInput
            className="title"
            placeholder="This is where your write your title"
            key="title"
          />
          <TextArea
            className="content"
            placeholder="This is where your write your content"
            key="content"
          />
          <Button label="Submit Article" type="submit"/>
        </Form>
      </>
    );
  }
}

export default connect()(CreateArticle);
