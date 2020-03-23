import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextArea, TextInput, Button, Form, Box } from 'grommet'
import axios from 'axios'

class CreateArticle extends Component {

  articleCreation = async event => {
    try {
      let response = await axios.post('/articles', {
        article: {
          title: event.target.title.value,
          teaser: event.target.teaser.value,
          content: event.target.content.value
        }
      })
      this.props.dispatch({
        type: "ARTICLE_SUBMITTED",
        payload: { message: response.data.message }})
    } catch (error) {
      this.props.dispatch({type: "ARTICLE_SUBMITTED", payload: {message: error.message}})
    }
  }

  render () {
    return (
      <>
        <h1>Let's create some magic...</h1>
        <Form className='create-article' onSubmit={this.articleCreation}>
          <TextInput
            className='title'
            placeholder='This is where you write your title'
            key='title'
            id='title'
            required={true}
          />
          <TextArea
            className='teaser'
            placeholder='This is where you write your teaser'
            key='teaser'
            id='teaser'
            required={true}
          />
          <TextArea
            className='content'
            placeholder='This is where you write your content'
            key='content'
            id='content'
            required={true}
          />
          <Button label='Submit Article' type='submit' />
          <Button label='Go Back' onClick={() => this.props.dispatch({ type: 'HIDE_CREATE' })} />
        </Form>
        <Box className="message">
        {this.props.message}
        </Box>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export default connect(mapStateToProps)(CreateArticle)
