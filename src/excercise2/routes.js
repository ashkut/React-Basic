/**
 * Created by ttn on 29/12/16.
 */

/**
 * Create a login form routed at /. If user enters valid username and password, route to /home otherwise
 * take user to /loginFailed which will have a link to go back to the login page.

 NOTE: authenticate user against some hard-coded username and password.
 */

import React from 'react'
import {IndexRoute, Route, browserHistory} from 'react-router'

import App from './App'
import Login from './Login'
import Home from './Home'
import LoginFailed from './LoginFailed'

export default (

  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="home" component={Home} />
    <Route path="loginfailed" component={LoginFailed} />
  </Route>

)
