/**
 * Created by ttn on 28/12/16.
 */

/*
* Create a stop watch component. called StopWatch This component should have a button and a timer inside it.
* On click of the button, the timer should start and should display the time passed (since the click of the button) every second.
* On click of the button again, the timer should stop and the displayed time should freeze.
*
*/

import React from 'react'

export default class StopWatch extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      timer : 0,
      timerStart : true
    }

    this.startTimer = this.startTimer.bind(this)
    this.stopTimer  = this.stopTimer.bind(this)
  }

  componentDidMount(){
    this.timerId = setInterval(() => this.increment(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  startTimer(){
    this.setState({
      timerStart : true
    })
    this.timerId = setInterval(() => this.increment(),1000)
  }

  stopTimer(){
    this.setState({
      timer : 0,
      timerStart : false
    })
    clearInterval(this.timerId)
  }

  increment(){
    this.setState((prevState,props) => ({
      timer : prevState.timer + 1
    }))
  }

  render(){
    return(
      <div>
        {
          (this.state.timerStart)
          ? <button onClick={this.stopTimer}>Click the button to stop timer</button>
          : <button onClick={this.startTimer}>Click the button to start timer</button>
        }
        <div>{this.state.timer}</div>
      </div>
    )
  }


}

