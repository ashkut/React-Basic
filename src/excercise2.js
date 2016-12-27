/**
 * Created by ttn on 27/12/16.
 *
 * Create a simple component called HelloWorld. This component only renders "Hello World" on the screen
 *
 */
import React from 'react';
import {render} from 'react-dom';

let container = document.getElementById("container");

export default class HelloWorld extends React.Component {

  render(){
    return(<div>Hello World</div>);
  }

}

render(<HelloWorld/>, container);
