/**
 * Created by ttn on 28/12/16.
 */

/**
 * Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal.
 * (set items in the state of Cart)
 * sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]
 *
 **/

import React from 'react'


export default class Cart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items : [ {name: 'item1', qty:2, price: 30},
        {name: 'item2', qty:5, price: 10},
        {name: 'item3', qty:7, price: 120}
      ]
    }
  }

  render(){
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <Items data={this.state.items}/>
        </table>
        <CartTotal data={this.state.items}/>
      </div>
    )
  }


}

class Items extends React.Component {

  render(){

    let items = this.props.data.map((row,index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.qty}</td>
          <td>{row.price}</td>
        </tr>
        )
    })

    return(
      <tbody>{items}</tbody>
    );

  }
}

class CartTotal extends React.Component {

  render(){

    let totalCart = this.props.data.reduce((total,row) => (total + (row.qty * row.price) ),0)

    return(<div>Cart Total is : {totalCart}</div>)

  }
}
