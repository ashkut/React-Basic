/**
 * Created by ttn on 29/12/16.
 */

import React from 'react'

export default class CartTotal extends React.Component {

  render(){

    let totalCart = this.props.data.reduce((total,row) => (total + (row.qty * row.price) ),0)

    return(<div>Total = {totalCart}</div>)

  }

}
