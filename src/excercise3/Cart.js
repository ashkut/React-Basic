/**
 * Created by ttn on 29/12/16.
 */

/**
 * Create a component called "Header" which either displays the current logged in username (if a user is logged in) or a "Login" button (if no user is logged in) in the navbar.
 * Use a hardcoded global variable "isUserLoggedIn" to check if user is logged in or not.
 *
 */

import React from 'react'
import Items from './Items'
import CartTotal from './CartTotal'
import '../style.css'

export default class Cart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items : [{name: "mango", qty:1, price: 30}],
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

    console.log(this.refs.newItem.value)

    let item = this.refs.newItem.value
    let itemSplit = item.split('-')

    let name = itemSplit[0];
    let price = itemSplit[1];
    let qty = 1;

    if(!itemSplit[1] || (itemSplit[1] && isNaN(itemSplit[1]) )){
      // console.log(!!itemInfoSplit[1],isNaN(itemInfoSplit[1]))
      e.preventDefault();
      this.setState({error:"Enter a valid value."})
      return;
    }else{
      this.setState({error:""})
    }

    let newItems = this.state.items
    newItems.push({name,price,qty})

    this.setState({
      items : newItems,
      addItemText : "Enter Item and price separated by -(hyphen)"
    });

  }

  addQty(item,index){
    let newItems = this.state.items
    item.qty = parseInt(item.qty) == -1? 0 : parseInt(item.qty) + 1
    newItems[index] = item
    this.setState(
      {items:newItems}
    )
  }

  delQty(item,index){
    let newItems = this.state.items
    item.qty = parseInt(item.qty) == 0? 0 : parseInt(item.qty) - 1
    newItems[index] = item
    this.setState(
      {items:newItems}
    )
  }

  delItem(index){
    let newItems = this.state.items
    delete newItems[index];
    this.setState({items:newItems});
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
            <Items data={this.state.items} addQty={this.addQty} delQty={this.delQty} delItem={this.delItem}/>
          </table>
          <CartTotal data={this.state.items}/>
        </center>
      </div>

    )
  }


}
