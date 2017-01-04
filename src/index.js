/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import App from './excercise1/container/App'
import createStore from './excercise2/store'

import Cart from './excercise2/container/Cart'

let app = document.getElementById('main')

var store = createStore

render(
  <Provider store={store} >
    <Cart />
  </Provider>, app)
