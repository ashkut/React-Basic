/**
 * Created by ttn on 29/12/16.
 */
import React from 'react'
import {browserHistory} from 'react-router'

let isUserLoggedIn = false

export default class Login extends React.Component {

  constructor(props){
    super(props)

    this.state={
      isUserLoggedIn : false
    }

    this.checkUsr = this.checkUsr.bind(this)
  }

  checkUsr() {

    let  userName1 = "user1"
    let  password1 = "pass1"

    console.log(this.refs.username.value);
    console.log(this.refs.userpass.value);


    if(this.refs.username.value === userName1 && this.refs.userpass.value === password1 ){

      console.log("hello")

      browserHistory.push("/home")

    } else {
      browserHistory.push("/loginfailed")
    }

    this.setState({
      isUserLoggedIn : true
    })

    console.log("==>"+this.state.isUserLoggedIn)



  }

  componentWillMount(){
    console.log("UI Component mount")
  }

  componentWillUnmount(){
    console.log("UI Component unmount")

  }

  render(){
    return(

      <div>

        <table>
          <tbody>
          <tr>
            <td>Username : </td>
            <td><input type="text" ref="username" name="username"/></td>
          </tr>
          <tr>
            <td>Password : </td>
            <td><input type="text" ref="userpass" name="password"/></td>
          </tr>
          <tr>
            <td colSpan="2"><button onClick={this.checkUsr}>Login</button></td>
          </tr>
          </tbody>
        </table>


      </div>

    )
  }


}
