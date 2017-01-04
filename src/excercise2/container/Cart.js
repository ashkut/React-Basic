/**
 * Created by ttn on 29/12/16.
 */


import React, {Component} from 'react'
import {connect} from 'react-redux'
import Items from './Items'

import CartTotal from './CartTotal'

import {
  addItem,
  delItem,
  addQty,
  delQty
} from '../actions'

class Cart extends Component {

  constructor(props){
    super(props)
    this.state = {
      error : "",
      addItemText : "Enter Item and price separated by -(hyphen)"
    }

    this.addItem = this.addItem.bind(this)
    this.clearText = this.clearText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addQty = this.addQty.bind(this)
    this.delItem = this.delItem.bind(this)
    this.delQty = this.delQty.bind(this)

  }

  addItem(e){

    let item = this.refs.newItem.value
    let itemSplit = item.split('-')

    let name = itemSplit[0];
    let price = itemSplit[1];
    let qty = 1;

    if(!itemSplit[1] || (itemSplit[1] && isNaN(itemSplit[1]) )){
      e.preventDefault();
      this.setState({error:"Enter a valid value."})
      return;
    }else{
      this.setState({error:""})
    }

    let newItems = this.state.items

    let newItem1 = {name,price,qty}
    this.props.dispatch(addItem(newItem1))

    this.setState({
      addItemText : "Enter Item and price separated by -(hyphen)"
    });

  }

  addQty(item,index){
    this.props.dispatch(addQty(item, index))
  }

  delQty(item,index){

    this.props.dispatch(delQty(item, index))
  }

  delItem(index){
    this.props.dispatch(delItem(index))
  }

  clearText(e){
    this.setState({
      addItemText : ""
    })
  }

  handleChange(e){
    this.setState({addItemText : e.target.value})
  }

  render(){

    let textBoxStyle = {
      width : 300
    }

    return(
      <div>
        <center>
          <div>
            <input type="text" ref="newItem" name="addItem" style={textBoxStyle} onChange={this.handleChange} value={this.state.addItemText} onClick={this.clearText}/><button onClick={this.addItem}>Add</button>
          </div>
          <span className="error">{this.state.error}</span>
          <table>
            <Items data={this.props.cart.items} addQty={this.addQty} delQty={this.delQty} delItem={this.delItem}/>
          </table>
          <CartTotal data={this.props.cart.items}/>
        </center>
      </div>

    )
  }


}

const CartComponent = connect((state)=>{
  return state;
})(Cart)

export default CartComponent
