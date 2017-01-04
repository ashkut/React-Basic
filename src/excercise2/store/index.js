/**
 * Created by ttn on 4/1/17.
 */
import {createStore} from 'redux'

import cartReducer from '../reducers'

const store = createStore(cartReducer)

export default store
