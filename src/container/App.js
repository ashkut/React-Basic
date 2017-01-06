/**
 * Created by ttn on 5/1/17.
 */

import React, {Component} from 'react'
//import {connect} from 'react-redux'

import DataList from './data.list'

export default class App extends Component{

  render(){
    return(
      <div>{this.props.children}</div>
    )
  }

}

/*
const AppComponent = connect((state)=>{
  return state;
})(App)

export default AppComponent
*/
