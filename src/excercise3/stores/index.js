/**
 * Created by ttn on 4/1/17.
 */

import {createStore} from 'redux'
import {browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


import RootReducer from '../reducers/'

//const middleware = routerMiddleware(browserHistory)


const store = createStore(RootReducer)

export default store
