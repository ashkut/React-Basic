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

    var d = new Date()

    let hr = d.getHours()
    let mm = d.getMinutes()
    let ss = d.getSeconds()

    let a = (hr > 12) ? "PM" : "AM"

    hr = (hr > 12)? (hr - 12) : hr

    let hrExt = (hr < 10)? "0" : ""
    let mmExt = (mm < 10)? "0" : ""
    let ssExt = (ss < 10)? "0" : ""


    this.props.dispatch(changeExt(CHANGE_HREXT,hrExt))
    this.props.dispatch(changeHour(hr))
    this.props.dispatch(changeExt(CHANGE_MNEXT,mmExt))
    this.props.dispatch(changeMin(mm))
    this.props.dispatch(changeExt(CHANGE_SSEXT,ssExt))
    this.props.dispatch(changeSec(ss))
    this.props.dispatch(changeAmorPM(a))

    this.timerId = setInterval(
      () => this.incrementTimer(),1000
    )

  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  incrementTimer(){

    let newSec = (this.props.timer.ss + 1)

    if(newSec === 60){
      this.changeMinutes()
      newSec = 0
    }

    this.props.dispatch(changeSec(newSec))

    this.formatTime()

  }

  formatTime(){

    let hr = parseInt(this.props.timer.dd)
    let mm = parseInt(this.props.timer.mm)
    let ss = parseInt(this.props.timer.ss)

    let a = (hr > 12) ? "PM" : "AM"

    hr = (hr > 12)? (hr - 12) : hr
    let hrExt = (hr < 10)? "0" : ""
    let mmExt = (mm < 10)? "0" : ""
    let ssExt = (ss < 10)? "0" : ""

    this.props.dispatch(changeExt(CHANGE_HREXT,hrExt))
    this.props.dispatch(changeHour(hr))
    this.props.dispatch(changeExt(CHANGE_MNEXT,mmExt))
    this.props.dispatch(changeMin(mm))
    this.props.dispatch(changeExt(CHANGE_SSEXT,ssExt))
    this.props.dispatch(changeSec(ss))
    this.props.dispatch(changeAmorPM(a))

  }


  changeMinutes(){
    let newMin = (this.props.timer.mm + 1)

    if(newMin === 60){
      this.changeHours()
      newMin = 0
    }

    this.props.dispatch(changeMin(newMin))

  }

  changeHours() {
    let newHour = (this.props.timer.hh + 1)

    if(newHour === 24)
      newHour = 0

    this.props.dispatch(changeHour(newHour))

  }

  render(){
    //console.log(this.props)
    return(
      <div>
        <h1>
          {this.props.timer.ddext}{this.props.timer.dd}:{this.props.timer.mmext}{this.props.timer.mm}:{this.props.timer.ssext}{this.props.timer.ss} {this.props.timer.a}
        </h1>
      </div>
    )
  }

}

const AppComponent = connect((state)=>{
  return state
})(App)

export default AppComponent
