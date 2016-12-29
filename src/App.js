/**
 * Created by ttnd on 27/12/16.
 */

/*

 Create a application with three routes : /home, /about, /contact-us. Create components for each route.
 Make /home index route. Refer screenshot at https://drive.google.com/file/d/0B5RL4MwvJrLmd1NCM2lCS0VTOTA/view

*/

import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

}

