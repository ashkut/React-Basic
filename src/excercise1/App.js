/**
 * Created by ttnd on 27/12/16.
 */
import React from 'react'
import {Link} from 'react-router'
import '../style.css'

export default class App extends React.Component {

  render() {
    let headerStyle = {
      color : "grey"
    }

    return (
      <div>

        <ul className="navigation">
          <li className=".navigation li"><Link to="/home">Home</Link></li>
          <li className=".navigation li"><Link to="/aboutus">AboutUs</Link></li>
          <li className=".navigation li"><Link to="/contactus">ContactUs</Link></li>
        </ul>

        <div>
          {this.props.children}
        </div>
      </div>
    )
  }

}

