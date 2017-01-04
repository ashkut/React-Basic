/**
 * Created by ttn on 4/1/17.
 */

import {
  changeHour,
  changeMin,
  changeSec,
  changeAmorPM,
  changeExt
} from '../actions'

import {
  CHANGE_HREXT,
  CHANGE_MNEXT,
  CHANGE_SSEXT
} from '../constants'

import React, {Component} from 'react'
import {connect} from 'react-redux'

class App extends Component {

  constructor(props){
    super(props)

    this.incrementTimer = this.incrementTimer.bind(this);
  }

  componentDidMount(){

    var d = this.props.initialTime

    let dd = d.getHours()
    let mm = d.getMinutes()
    let ss = d.getSeconds()

    this.props.dispatch(changeHour(dd))
    this.props.dispatch(changeMin(mm))
    this.props.dispatch(changeSec(ss))



    this.timerId = setInterval(
      () => this.incrementTimer(),1000
    )

  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  incrementTimer(){

    let newSec = (this.props.ss + 1)

    if(newSec === 60){
      this.changeMinutes()
      newSec = 0
    }

    this.props.dispatch(changeSec(newSec))

    this.formatTime()

  }

  formatTime(){
    var hr = this.props.dd
    var hrExt = this.props.ddext
    var mm = this.props.mm
    var mmExt = this.props.mmext
    var ss = this.props.ss
    var ssExt = this.props.ssext
    var a = this.props.a

    hr = (hr > 12)? (hr - 12) : hr
    hrExt = (hr < 10)? "0" : ""
    mmExt = (mm < 10)? "0" : ""
    ssExt = (ss < 10)? "0" : ""

    a = (hr > 12) ? "PM" : "AM"

    this.props.dispatch(changeExt(CHANGE_HREXT,hrExt))
    this.props.dispatch(changeHour(hr))
    this.props.dispatch(changeExt(CHANGE_MNEXT,mmExt))
    this.props.dispatch(changeMin(mm))
    this.props.dispatch(changeExt(CHANGE_SSEXT,ssExt))
    this.props.dispatch(changeSec(ss))
    this.props.dispatch(changeAmorPM(a))

  }


  changeMinutes(){
    let newMin = (this.props.mm + 1)

    if(newMin === 60){
      this.changeHours()
      newMin = 0
    }

    this.props.dispatch(changeMin(newMin))

  }

  changeHours() {
    let newHour = (this.props.hh + 1)

    if(newHour === 24)
      newHour = 0

    this.props.dispatch(changeHour(newHour))

  }

  render(){
    console.log(this.props)
    return(
      <div>
        <h1>
          {this.props.ddext}{this.props.dd}:{this.props.mmext}{this.props.mm}:{this.props.ssext}{this.props.ss} {this.props.a}
        </h1>
      </div>
    )
  }

}

const AppComponent = connect((state)=>{
  return state
})(App)

export default AppComponent
