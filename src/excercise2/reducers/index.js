/**
 * Created by ttn on 4/1/17.
 */

import {
  ADD_ITEM,
  DEL_ITEM,
  ADD_QTY,
  DEL_QTY
} from '../constants'

const initialState = {
  items : [
      {name: "mango", qty:1, price: 30}
    ]
}


const cartReducer = function (state = initialState, action) {

  switch (action.type){

    case ADD_ITEM: {
      let newItemsState = [].concat(state.items)
      let newItem = action.params
      newItemsState.push(newItem)

      return {...state, items: newItemsState }
    }

    case DEL_ITEM: {
      let newItemsState = [].concat(state.items)
      delete  newItemsState[action.index]

      return {...state, items: newItemsState }
    }

    case ADD_QTY: {
      let newItemsState = [].concat(state.items)
      let item = action.params
      item.qty = parseInt(item.qty) + 1
      newItemsState[action.index] = action.params

      return {...state, items: newItemsState }
    }

    case DEL_QTY: {

      let newItemsState = [].concat(state.items)
      let item = action.params
      item.qty = parseInt(item.qty) <= 0 ? 0 : parseInt(item.qty) - 1
      newItemsState[action.index] = action.params

      return {...state, items: newItemsState}

    }
  }

  return state

}

export default cartReducer
