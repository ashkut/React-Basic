/**
 * Created by ttn on 27/12/16.
 *
 * Create a component called BasicPage. This component should internally use 3 components namely "Header", "Content" and "Footer".
 * The "Header" component should render the header of the page The "Footer" component should render the footer of the page The "Content" should render some dummy text Use the above mentioned 3 components to create a basic page
 *
 */
import React from 'react';
import Users from './excercise6'

export default class BasicPage extends React.Component {

  render(){

    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );

  }

}

class Header extends React.Component {

  render(){
    var footStyle = {backgroundColor : "Cyan", height: 50}
    return (
      <header style={footStyle}/>
    );
  }

}


class Content extends React.Component {

  render(){

    var backStyle = {backgroundColor : "AliceBlue", paddingBottom : 100};

    return (
      <div style={backStyle}>
        <Users/>
      </div>
    );

  }

}

class Footer extends React.Component {

  render(){
    var footStyle = {backgroundColor : "Cyan", height: 50}

    return (

      <footer style={footStyle}/>
    );
  }

}

