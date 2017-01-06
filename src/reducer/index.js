/**
 * Created by ttn on 5/1/17.
 */

import {
  ADD_DATA,
  START_FETCH,
  FETCH_FAILED
} from '../constants'

const initialData = {
  data:[],
  errorTxt: "",
  loading: false
}

const apiReducer = function (state = initialData, action) {

  switch(action.type){

    case ADD_DATA: {
      return {...state, data: action.payload, errorTxt:"" ,loading: false}
    }

    case START_FETCH: {
      let newData = []
      return {...state, data: newData, errorTxt:"Loading data from API...." ,loading: true}
    }

    case FETCH_FAILED: {
      let newData = []
      return {...state, data: newData, errorTxt:"Fetch Data failed from API...." ,loading: true}
    }

  }

  return state;

}

export default apiReducer
