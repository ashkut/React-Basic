/**
 * Created by ttn on 5/1/17.
 */

import {

  ADD_DATA,
  DELETE_DATA,
  UPDATE_DATA,
  FETCH_DATA

} from '../constants'

import fetch from 'isomorphic-fetch';

function addData(payload){
  return {
    type : ADD_DATA,
    payload
  }
}

export function fetchData() {
  console.log("inside fetch")
  return (dispatch) => {
    fetch("http://rest.learncode.academy/api/learncode/myData")
      .then((response) => {
          return response.json()
        }
      )
      .then(json => {
        console.log(json)
        dispatch(addData(json))
      })
      .catch((e) => {
          console.log("Error while calling API....",e)
        }
      )
  }
}

export function delData(param) {

  return (dispatch) => {
    fetch("http://rest.learncode.academy/api/learncode/myData/"+param.id,{
     method: "DELETE"
    }).then((response) => {
          console.log(response)
            if(response.status === 200)
              dispatch(fetchData())
        }
      ).catch((e) => {
          console.log("Error while calling API....",e)
        }
      )
  }
}

export function updateData(param) {

  return (dispatch) => {
    fetch("http://rest.learncode.academy/api/learncode/myData/"+param.id,{
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(param)
    }).then((response) => {
        console.log(response)
        if(response.status === 200)
          dispatch(fetchData())
      }
    ).catch((e) => {
        console.log("Error while calling API....",e)
      }
    )
  }
}

export function createData(param) {

  return (dispatch) => {
    fetch("http://rest.learncode.academy/api/learncode/myData", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(param)
    }).then((response) => {
        console.log(response)
        if(response.status === 200)
          dispatch(fetchData())
      }
    ).catch((e) => {
        console.log("Error while calling API....",e)
      }
    )
  }
}

