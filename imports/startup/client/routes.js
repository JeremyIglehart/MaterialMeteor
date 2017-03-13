import { Meteor } from 'meteor/meteor'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from '../../ui/pages/app'

const history = createBrowserHistory()

const routes = (
  <div className="app">
    <MuiThemeProvider>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </MuiThemeProvider>
  </div>
)

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.material-meteor-app'))
})
