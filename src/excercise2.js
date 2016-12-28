/**
 * Created by ttn on 28/12/16.
 */

/**
 * Add ability to above component to change it's state ( temperature ) every 5 seconds with some random value between -10 to 110.
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

  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),5000
    );
  }

  tick(){

    let randomTemp = this.getRandomIntInclusive(-100,150);

    this.setState({
      temperature : randomTemp
    })
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render(){

    return(
      <div>
        The present Temperature is : {this.state.temperature}
        <div>
          {(this.state.temperature > 100)? `Water is in Gas state` :
            ((this.state.temperature > 0 && this.state.temperature <= 100)? `Water is in Liquid state` : `Water is in Solid state`)}
        </div>
      </div>
    )

  }

}


