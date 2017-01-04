/**
 * Created by ttn on 4/1/17.
 */

import {
  ADD_ITEM,
  DEL_ITEM,
  ADD_QTY,
  DEL_QTY,
  UPDATE_CART_TOTAL
} from '../constants'

export function addItem(params) {
  return {
    type: ADD_ITEM,
    params
  }
}

export function delItem(index) {
  return {
    type: DEL_ITEM,
    index
  }
}

export function addQty(params, index) {
  return {
    type: ADD_QTY,
    params,
    index
  }
}

export function delQty(params, index) {
  return {
    type: DEL_QTY,
    params,
    index
  }
}
