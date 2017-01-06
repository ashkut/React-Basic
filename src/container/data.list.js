/**
 * Created by ttn on 5/1/17.
 */

import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {Table, Button} from 'react-bootstrap'

import {
  fetchData,
  delData
} from '../actions'

class DataList extends Component {

  componentDidMount(){
    this.props.dispatch(fetchData())
  }

  render() {

    const rows = this.props.data.map((row, index) => {

      let to = "/detail/"+row.id

      return (
        <tr key={index}>
          <td>{index + 1 }</td>
          <td>{row.first_name}</td>
          <td>{row.last_name}</td>
          <td>{row.email}</td>
          <td>{row.company}</td>
          <td><Link to={to} query={{fromUpdate: true}}>Click for details</Link></td>
          <td>
            <Button bsStyle="primary" bsSize="small" onClick={(e) => this.props.dispatch(delData(row))}>Delete</Button>
          </td>
        </tr>
      )
    })

    const tableStyle = {textAlign: "center" }

    return (



      <div>

        <div>
          <Link to="/detail/1/" style={{marginLeft: "10px"}} query={{fromUpdate: false}}>Create User Data</Link>
        </div>
        <br/>
        <div>
          <Table striped bordered condensed hover responsive style={tableStyle}>
            <thead>
              <tr>
                <th style={tableStyle}>#</th>
                <th style={tableStyle}>First Name</th>
                <th style={tableStyle}>Last Name</th>
                <th style={tableStyle}>Email</th>
                <th style={tableStyle}>Company</th>
                <th/>
                <th/>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

const DataListComponent = connect((state=>{
  return state
}))(DataList)

export default DataListComponent
