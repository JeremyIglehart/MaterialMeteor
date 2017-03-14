import React, { Component } from 'react'
import { createContainer } from 'meteor/react-meteor-data'

import { createStyleSheet } from 'jss-theme-reactor'
import withStyles from 'material-ui/styles/withStyles'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Text from 'material-ui/Text'

const styleSheet = createStyleSheet('SimpleAppBar', () => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  appBar: {
    position: 'relative',
  },
}))

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        <div className={this.props.classes.root}>
        <AppBar className={this.props.classes.appBar}>
          <Toolbar>
            <Text type="title" colorInherit>Material Meteor</Text>
          </Toolbar>
        </AppBar>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {

  return { loading: true }
}, withStyles(styleSheet)(App))
