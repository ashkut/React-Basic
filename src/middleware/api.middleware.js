/*
/!**
 * Created by ttn on 5/1/17.
 *!/

import {
  FETCH_DATA,
  ADD_DATA,
  DELETE_DATA,
  UPDATE_DATA
} from '../constants'

import {fetch} from 'isomorphic-fetch'

const apiMiddleware = (store) => (state) => (action) => {

  console.log("Inside Middleware....")
  switch(action.type){

    case FETCH_DATA :{

      dispatch(fetchDataStarted())

      fetch("http://rest.learncode.academy/api/learncode/myData")
        .then(
          function (response) {
            const payload = response.json()

            console.log(payload)

            dispatch(addData(payload))

          }
        ).catch(
        (e) => {
          console.log("Error while calling API....")
        }
      )

    }


    case ADD_DATA :{

      //dispatch(fetchDataStarted())

      fetch("", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payload: actions.params
        })
      })
        .then(
          function (response) {
            const payload = response.json()

            console.log(payload)

            dispatch(addData(payload))

          }
        ).catch(
        (e) => {
          console.log("Error while calling API....")
        }
      )

    }


    case DELETE_DATA :{

      fetch("", {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payload: actions.params
        })
      })
        .then(
          function (response) {
            const payload = response.json()

            console.log(payload)

            dispatch(addData(payload))

          }
        ).catch(
        (e) => {
          console.log("Error while calling API....")
        }
      )

    }


    case UPDATE_DATA :{

      fetch("", {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payload: actions.params
        })
      })
        .then(
          function (response) {
            const payload = response.json()

            console.log(payload)

            dispatch(addData(payload))

          }
        ).catch(
        (e) => {
          console.log("Error while calling API....")
        }
      )

    }

  }

}


export default apiMiddleware
*/
