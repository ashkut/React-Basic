/**
 * Created by ttn on 29/12/16.
 */

import React from 'react'
import Items from './Items'
import CartTotal from './CartTotal'

export default class Cart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items : [{name: 'mango', qty:1, price: 30}]
    }
  }

  addItem(e){

    console.log("addItem called")


  }

  render(){
    return(
      <div>
        <center>
          <table>
            <Items data={this.state.items} addItem={this.addItem}/>
          </table>
          <CartTotal data={this.state.items}/>
        </center>
      </div>
    )
  }


}
