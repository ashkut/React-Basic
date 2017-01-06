/**
 * Created by ttn on 5/1/17.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {Table, PageHeader, Button} from 'react-bootstrap'

import {
  updateData,
  createData
} from '../actions'

class DataDetail extends Component {

  constructor(props){
    super(props)

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      company: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitData = this.submitData.bind(this)
    this.goHome = this.goHome.bind(this)

  }

  handleChange(e){
    let initialState = this.state
    initialState[e.target.name] = e.target.value
    this.setState(initialState)
  }

  submitData(){

    let newData = {
      id: this.state.id,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      company: this.state.company
    }

    if(this.props.location.query.fromUpdate === "true")
      this.props.dispatch(updateData(newData))
    else
      this.props.dispatch(createData(newData))

    browserHistory.push("/home")

  }

  goHome(){
    browserHistory.push("/home")
  }

  componentDidMount() {

    const idx = this.props.params.id

    console.log(this.props.location.query.fromUpdate,"111")

    if (this.props.location.query.fromUpdate === "true") {

      this.props.data.map((row, index) => {

        if (row.id === idx) {
          this.setState({
            id: idx,
            firstName: row.first_name,
            lastName: row.last_name,
            email: row.email,
            company: row.company
          })
        }
      })
    }

  }

  componentWillUnmount(){
    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      company: ""
    })
  }

  render(){

    console.log("inside data.detail")

    const tableStyle = {marginLeft: "80px", width: "40%"}
    const headerStyle = {border:"1px solid #ddd",  marginLeft: "10px", backgroundColor:"ghostwhite"}
    const fieldStyle = {width: "80%"}

    return(
      <div>
        <PageHeader style={headerStyle}>
          User Details Page
        </PageHeader>

        <div>
          <Table striped bordered condensed hover responsive style={tableStyle} >
            <tbody style={fieldStyle}>
              <tr>
                <td style={{textAlign: "center"}}>First Name</td>
                <td><input size="50" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td style={{textAlign: "center"}}>Last Name</td>
                <td><input type="text" size="50" name="lastName" value={this.state.lastName} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td style={{textAlign: "center"}}>Email Id </td>
                <td><input type="text" size="50" name="email" value={this.state.email} onChange={this.handleChange}/></td>
              </tr>
              <tr>
                <td style={{textAlign: "center"}}>Company</td>
                <td><input type="text" size="50" name="company" value={this.state.company} onChange={this.handleChange}/></td>
              </tr>
            </tbody>
          </Table>

          <Button bsStyle="primary" onClick={this.submitData} style={{marginLeft:"80px"}}>Save Changes</Button> <Button bsStyle="primary" onClick={this.goHome}>Home</Button>

        </div>
      </div>
    )
  }

}

const DataDetailComponent = connect((state)=>{
  return state;
})(DataDetail)

export default DataDetailComponent
