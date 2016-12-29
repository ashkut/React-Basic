/**
 * Created by ttn on 29/12/16.
 */

import React from 'react'
import {browserHistory} from 'react-router'

export default class Users extends React.Component {

  goBack(){
    browserHistory.push("/contactus")
  }

  render(){
    return(
      <div>
        <div>This is the Users information Page</div>
        <div>{this.props.children}</div>
        <button onClick={this.goBack.bind()}>Go to Contact Us</button>
      </div>
    )
  }

}
