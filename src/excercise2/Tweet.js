/**
 * Created by ttn on 30/12/16.
 */

import React from 'react'

export default class Tweet extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      tweetBox : "",
      display : 0,
      disabled : true,
      remaining : 50
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){

    console.log("inside handle change")

    let maxLimit = 50

    let initialState = e.target.value
    let newRemaining = ( maxLimit - initialState.length)

    if(initialState.length > 0 && initialState.length <= 50){
      this.setState({
        tweetBox : e.target.value,
        disabled: false,
        display:1,
        remaining : newRemaining
      })
    } else {
        this.setState({
          tweetBox : e.target.value,
          disabled: true,
          display:0.5,
          remaining : newRemaining
        })
    }
  }

  render(){

    let textAreaStyle = {

      height : "150px",
      width : "500px"

    }

    let buttonStyle = {
      background:"#FC8B59",
      opacity:this.state.display,
      color:"white",
      padding : "10px"

    }

    let divStyle = {
      marginLeft : "425px"
    }

    let textStyle = {
      color : "orange"
    }

    return(

      <div>
        <div>
          <input type="textarea" style={textAreaStyle} value={this.state.tweetBox} onChange={this.handleChange}/>
        </div>
        <br/>
        <div style={divStyle}>
          <text style={textStyle}>{this.state.remaining}</text>  <button ref="tweet" style={buttonStyle} disabled={this.state.disabled}>Tweet</button>
        </div>
      </div>

    )
  }


}
