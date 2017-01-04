/**
 * Created by ttn on 4/1/17.
 */

import {
  CHANGE_HOUR,
  CHANGE_MIN,
  CHANGE_SEC,
  CHANGE_AMPM
} from '../constants'

export function changeHour(params) {
  return {
    type: CHANGE_HOUR,
    params
  }
}

export function changeMin(params) {
  return {
    type: CHANGE_MIN,
    params
  }
}

export function  changeSec(params) {
  return {
    type: CHANGE_SEC,
    params
  }
}

export function changeAmorPM(params) {
  return {
    type: CHANGE_AMPM,
    params
  }
}

export function changeExt(actionType, params) {
  return {
    type: actionType,
    params
  }
}
