/**
 * Created by ttn on 29/12/16.
 */

import React from 'react'

export default class Items extends React.Component {

  submit(){

  }

  render(){

    let items = this.props.data.map((row,index) => {
      return (

        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.qty}</td>
          <td>{row.price}</td>
          <td><button>-</button></td>
          <td><button>+</button></td>
          <td><button>Delete</button></td>
        </tr>
      )
    })

    return(
      <tbody>
        <tr>
          <input type="text" name="addItem" defaultValue="Enter Item"/><button onClick={this.props.addItem}>Add</button>
        </tr>
        {items}
      </tbody>
    );

  }
}
