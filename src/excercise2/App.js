/**
 * Created by ttn on 29/12/16.
 */
import React from 'react'

export default class App extends React.Component {

  render(){
    return(

      <div>
        {this.props.children}
      </div>

    )
  }

}
