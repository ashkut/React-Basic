/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import HelloWorld from './excercise2'
import Header from './excercise3'
import Users from './excercise6'
import BasicPage from './excercise5'

let app = document.getElementById('container');



export default class MyApp extends React.Component {

  render(){

    return (

        <div>
            <BasicPage/>
        </div>

    );

  }

}

render(<MyApp />, app);
