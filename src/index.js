/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import createStore from './store'
import {Router, browserHistory} from 'react-router'
import routes from './routes'

//import App from './container/App'

let app = document.getElementById('main')

const store = createStore

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>
  , app)
