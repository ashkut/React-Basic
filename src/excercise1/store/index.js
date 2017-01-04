/**
 * Created by ttn on 4/1/17.
 */
import {createStore} from 'redux'

import timerReducer from '../reducers'

const store = createStore(timerReducer)

export default store
