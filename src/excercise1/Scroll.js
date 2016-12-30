/**
 * Created by ttn on 30/12/16.
 */

import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class Scroll extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      display : 0
    }

    this.handleScroll = this.handleScroll.bind(this)

  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    console.log("inside handler")

    let scrollpos = window.pageYOffset;


    if(scrollpos > this.props.offset){
      this.setState({
        display : 1
      })
    } else {
      this.setState({
        display : 0
      })
    }

  }

  scrollTop(){
    window.scrollTo(0,0)
  }

  render(){

    let scrollStyle = {
      position : "absolute",
      background : this.props.background,
      top : this.props.top,
      left: this.props.left,
      right: this.props.right,
      bottom : this.props.bottom,
      fontSize : "40px",
      width: "50px",
      height: "50px",
      border: "3px solid #000",
      borderRadius: "50%",
      padding: "10px",
      cursor:"pointer",
      textAlign : "center"
    }

    let styleWrapper = {
      opacity : this.state.display
    }

    return(

      <div style={styleWrapper} onClick={this.scrollTop}>
        <FontAwesome style={scrollStyle} name="arrow-up"/>
      </div>

    )
  }

}

Scroll.propTypes = {
  top : React.PropTypes.string,
  bottom : React.PropTypes.string,
  left : React.PropTypes.string,
  right : React.PropTypes.string,
  offset : React.PropTypes.string,
  background : React.PropTypes.string
}
