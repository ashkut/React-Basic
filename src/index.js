/* eslint-disable no-console */

import App from './excercise1/container/App'
import createStore from './excercise2/store'
import Cart from './excercise2/container/Cart'

import React from 'react'
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import createMainStore from './excercise3/stores'
import Routes from './excercise3/Routes'

let app = document.getElementById('main')

const store = createMainStore

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} >
    <Router routes={Routes} history={history} />
  </Provider>, app)
