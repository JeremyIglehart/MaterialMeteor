import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default createContainer(() => {

  return { loading: true }
}, App)
