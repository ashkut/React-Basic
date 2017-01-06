/**
 * Created by ttn on 5/1/17.
 */

import {createStore} from 'redux'

import Reducers from '../reducer'
import Middlewares from '../middleware'

const store = createStore(Reducers,Middlewares)

export default store
