/**
 * Created by ttn on 28/12/16.
 */
/**
 * Create a User Registration form with fields ( FirstName, LastName, EmailId, Contact Number, Password and Confirm password).
 * Form should have a submit button. Apply form validation to incorporate following rules.
 *
 */


import React from 'react'

export default class UserRegisration extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      firstNameTxt : "",
      lastNameTxt : "",
      emailTxt : "",
      contactNumberTxt : "",
      passwdTxt : ""
    }

    this.submitForm = this.submitForm.bind(this)

  }


  validateEmail(value){

    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }


  submitForm(){

    if(this.refs.firstNameRef.value > 0 && this.refs.lastNameRef.value > 0 ){
      if(this.refs.firstNameRef.value === this.refs.lastNameRef.value){
        this.setState({
          firstNameTxt : "Validation Failed.",
          lastNameTxt : "Validation Failed."
        })
      } else {
        this.setState({
          firstNameTxt : "Validation Passed.",
          lastNameTxt : "Validation Passed."
        })
      }
    } else {
      this.setState({
        firstNameTxt : "Validation Failed, Field is mandatory.",
        lastNameTxt : "Validation Failed, Field is mandatory."
      })
    }


    if(this.refs.passwdRef.value === this.refs.confPasswdRef.value){
      this.setState({
        passwdTxt : "Validation Passed."
      })
    } else {
      this.setState({
        passwdTxt : "Validation Failed."
      })
    }

    let contactNo = this.refs.contactNumberRef.value

    if(contactNo.length === 10){
      this.setState({
        contactNumberTxt : "Validation Passed."
      })
    } else {
      this.setState({
        contactNumberTxt : "Validation Failed."
      })
    }

    let emailId = this.refs.emailRef.value

    if (this.validateEmail(emailId)) {
      this.setState({
        emailTxt : "Validation Passed."
      })
    } else {
      this.setState({
        emailTxt : "Validation Failed."
      })
    }

  }

  render(){
    let style = {
      color : "red"
    }

    return(
      <div>
        <table>
          <tr>
            <td>First Name : </td>
            <td>
              <input ref="firstNameRef" type="text" name="firstName" />

              <div id="firstNameDiv" style={style}>{this.state.firstNameTxt}</div>
            </td>
          </tr>

          <tr>
            <td>Last Name : </td>
            <td>
              <input ref="lastNameRef" type="text" name="lastName" />
              <div id="lastNameDiv" style={style}>{this.state.lastNameTxt}</div>
            </td>
          </tr>

          <tr>
            <td>Email : </td>
            <td>
              <input ref="emailRef" type="text" name="email" />
              <div id="emailDiv" style={style}>{this.state.emailTxt}</div>
            </td>
          </tr>

          <tr>
            <td>Contact Number : </td>
            <td>
              <input ref="contactNumberRef" type="text" name="contactNumber" />
              <div id="contactNumberDiv"  style={style}>{this.state.contactNumberTxt}</div>
            </td>
          </tr>

          <tr>
            <td>Password : </td>
            <td>
              <input ref="passwdRef" type="text" name="password" />
              <div id="password1"  style={style}>{this.state.passwdTxt}</div>
            </td>
          </tr>

          <tr>
            <td>Confirm Password : </td>
            <td>
              <input ref="confPasswdRef" type="text" name="confirmPassword" />

              <div id="password2"  style={style}>{this.state.passwdTxt}</div>
            </td>
          </tr>

          <tr rowSpan="2"><button onClick={this.submitForm}>Submit</button></tr>
        </table>

      </div>
    )


  }

}
