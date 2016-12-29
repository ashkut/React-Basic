/**
 * Created by ttn on 29/12/16.
 */

/**
 * Create a application with three routes : /home, /about, /contact-us. Create components for each route.
 * Make /home index route. Refer screenshot at https://drive.google.com/file/d/0B5RL4MwvJrLmd1NCM2lCS0VTOTA/view
 */


import React from 'react'
import {Router, Route, Link, IndexRoute} from 'react-router'

import App from './App'
import HomePage from './HomePage'
import ContactUs from './ContactUs'
import AboutUs from './AboutUS'
import Users from './Users'
import User from './User'

let isUserLogged = true

function checkAuth(nextState, replace){
  if(!isUserLogged){
    replace({
      path: "/"
    })
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="aboutus" component={AboutUs} />
    <Route path="contactus" component={ContactUs} />
    <Route path="users" component={Users}>
      <Route path=":name" component={User} onEnter={checkAuth} />
    </Route>

</Route>

)
