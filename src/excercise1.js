/**
 * Created by ttn on 28/12/16.
 */

/**
 * Create a component Water having a state variable as temperature. Render Water is in solid state if temperature <= 0,
 * Water is in a liquid state if temperature > 0 and < 100, Water in Gas state if temperature >= 100.
 * Change the state of the component from react extension in the browser.
 *
 */


import React from 'react'

export default class Water extends React.Component{

  constructor(props){
    super(props)
    this.state={
      temperature : 0
    }
  }

  render(){

    return(
      <div>
        {(this.state.temperature > 100)? `Water is in Gas state` :
          ((this.state.temperature > 0 && this.state.temperature <= 100)? `Water is in Liquid state` : `Water is in Solid state`)}
      </div>
    )

  }

}


