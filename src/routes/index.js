/**
 * Created by ttn on 6/1/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from '../container/App'
import DataList from '../container/data.list'
import Detail from '../container/data.detail'

export default (
  <Route path={"/"} component={App}>
    <IndexRoute component={DataList}/>
    <Route path={"home"} component={DataList}/>
    <Route path={"detail/:id"} component={Detail}/>
  </Route>
)
