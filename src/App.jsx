import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateArticle from './components/CreateArticle'
import { Grommet, Main, Heading, Button, Box } from 'grommet'
import { grommet } from 'grommet/themes'

class App extends Component {
  render () {
    return (
      <>
        <Grommet theme={grommet}>
          <Main fill align='center' justify='center'>
            <Heading>NEWS STAFF LOGIN PAGE</Heading>
            <Box
              direction='column'
              pad='medium'
              margin='medium'
              className='article'
            >
              {this.props.state.firstPage && 
                <Button
                  label='Create Article'
                  onClick={() => this.props.dispatch({ type: 'SHOW_CREATE' })}
                />}
              {this.props.state.createArticle && <CreateArticle />}
            </Box>
          </Main>
        </Grommet>
      </>
    )
  }
}



const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App)
