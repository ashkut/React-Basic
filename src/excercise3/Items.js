/**
 * Created by ttn on 29/12/16.
 */

import React from 'react'

export default class Items extends React.Component {

  addNewItem(){

    console.log("called")

    let item = this.refs.newItem.value

    console.log("111 : " + this.refs.newItem.value)

    this.props.addItem(item);


  }

  render(){

    let items = this.props.data.map((row,index) => {
      return (

        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.qty}</td>
          <td>{row.price}</td>
          <td><button onClick={()=>this.props.delQty(row,index)}>-</button></td>
          <td><button onClick={()=>this.props.addQty(row,index)}>+</button></td>
          <td><button onClick={()=>this.props.delItem(index)}>Delete</button></td>
        </tr>
      )
    })

    return(
      <tbody>
        <tr>
          <td>

          </td>
        </tr>
        {items}
      </tbody>
    );

  }
}
