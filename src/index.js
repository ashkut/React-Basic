/* eslint-disable no-console */
import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

import routes from './excercise2/routes'

import Cart from './excercise3/Cart'

let app = document.getElementById('container')

render(<Cart/>, app)

//render(<Router routes={routes}  history={browserHistory}/>, app)
