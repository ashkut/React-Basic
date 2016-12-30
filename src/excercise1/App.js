/**
 * Created by ttn on 30/12/16.
 */

/**
 * Make a Scroll To Top Component in React :- The component should be visible only when user scrolls the page.
 * Component should be Re-usable and it styles should be customisable like "background-color, position(top,left,right,bottom)".
 * Component offset (distance from the top when the component would be visible) should pass from the Props.
 * Note:- Use React-font awesome for Arrow sign.
 *
 */

import React from 'react'

import Scroll from './Scroll'

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      color : "cadetblue",
      top : "500px",
      left : "1100px",
      right : "150px",
      bottom : "20px"
    }

  }

  render(){

    let styleWrapper = {
      height : "800px"
    }

    return(
      <div>
        <div style={styleWrapper}>

          Scroll down to display the icon.

        </div>
        <Scroll offset="50" background={this.state.color} top={this.state.top} right={this.state.right} left={this.state.left} bottom={this.state.bottom}/>
      </div>
    )

  }

}

