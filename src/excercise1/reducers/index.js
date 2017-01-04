/**
 * Created by ttn on 4/1/17.
 */

import {
  CHANGE_HOUR,
  CHANGE_MIN,
  CHANGE_SEC,
  CHANGE_AMPM,
  CHANGE_HREXT,
  CHANGE_MNEXT,
  CHANGE_SSEXT
} from '../constants'

const intialState = {
  initialTime: new Date(),
  time: {
    dd: "",
    ddext: "",
    mm: "",
    mmext: "",
    ss: "",
    ssext: "",
    a : ""
  }
}


const timerReducer = function (state = intialState, action) {

  switch (action.type){

    case CHANGE_HOUR: {
      return {...state, dd: action.params }
    }

    case CHANGE_MIN: {
      return {...state, mm: action.params }
    }

    case CHANGE_SEC: {
      return {...state, ss: action.params }
    }

    case CHANGE_AMPM: {
      return {...state, a: action.params }
    }

    case CHANGE_HREXT: {
      return {...state, ddext: action.params }
    }

    case CHANGE_MNEXT: {
      return {...state, mmext: action.params }
    }

    case CHANGE_SSEXT: {
      return {...state, ssext: action.params}
    }
  }

  return state

}

export default timerReducer
