/**
 * Created by ttn on 29/12/16.
 */

import React from 'react'

export default class User extends React.Component {

  render(){
    return(
      <div>This User information is as below
        <table>
          <tr><td>Users Name is : {this.props.params.name}</td></tr>
          <tr><td>Users Address is : {this.props.location.query.address}</td></tr>
        </table>
      </div>
    )
  }

}
