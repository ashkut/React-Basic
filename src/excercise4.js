/**
 * Created by ttn on 28/12/16.
 */

/**
 * Create a component UserDetail that takes user object as a prop and displays the user info in a table.
 *
 * Apply prop validation on userDetail component. prop user in UserDetail should be an object with key name (string),
 * age (number), avatar (string).
 *
 */

import React from 'react'


const data  = [
  {name: 'John', age: "25", avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
  {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
  {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
  {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  {name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
]

const tableHeader = ['Name','Age','Avatar']

export default class UserDetail extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <table>
          <TableHeader tableHeader = {tableHeader}/>
          <TableBody userData = {data}/>
        </table>
      </div>


    );
  }

}


class TableHeader extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let rows = this.props.tableHeader.map((heading,index) => {
        return(<th key={index}>{heading}</th>);
      }
    )

    return(<thead>{rows}</thead>);

  }

}


class TableBody extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let rows = this.props.userData.map((row,index) => {
        return(
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.age}</td>
            <td>
              <img src={row.avatar}/>
            </td>
          </tr>
        );
      }
    )

    return(<tbody>{rows}</tbody>)

  }

}

UserDetail.propTypes = {

  userData : React.PropTypes.string
}

TableHeader.propTypes = {

  name : React.PropTypes.string,
  age : React.PropTypes.string,
  avatar : React.PropTypes.string

}

TableBody.propTypes = {
    name : React.PropTypes.string,
    age : React.PropTypes.number,
    avatar : React.PropTypes.string

}
