/**
 * Created by ttn on 27/12/16.
 *
 * Abstract away the map logic from the above created component "Users" into a new component called "UserDetail".
 * Use this new component for every user in the above list and refactor the "Users" component to use "UserDetail" inside it.
 *
 */
import React from 'react'

const USERS = [{
  "_id": "58613042d144513fd8c03bbc",
  "isActive": true,
  "age": 38,
  "name": "Noelle Finch",
  "gender": "female",
  "email": "noellefinch@codax.com"
},
  {
    "_id": "58613042f1ddd22998f7c02f",
    "isActive": false,
    "age": 40,
    "name": "Dominique Middleton",
    "gender": "female",
    "email": "dominiquemiddleton@codax.com"
  },
  {
    "_id": "58613042b6f22acfb34097da",
    "isActive": true,
    "age": 21,
    "name": "Beulah Hoover",
    "gender": "female",
    "email": "beulahhoover@codax.com"
  },
  {
    "_id": "5861304228670a96b75bde35",
    "isActive": false,
    "age": 26,
    "name": "Casey Acosta",
    "gender": "male",
    "email": "caseyacosta@codax.com"
  },
  {
    "_id": "586130424d77931fe3e26704",
    "isActive": true,
    "age": 36,
    "name": "Kathleen Parsons",
    "gender": "female",
    "email": "kathleenparsons@codax.com"
  },
  {
    "_id": "58613042b81ed4aea4f8bdd1",
    "isActive": true,
    "age": 32,
    "name": "Tami Morse",
    "gender": "female",
    "email": "tamimorse@codax.com"
  },
  {
    "_id": "5861304235cd4776fd7ce5a7",
    "isActive": false,
    "age": 28,
    "name": "Annette Whitaker",
    "gender": "female",
    "email": "annettewhitaker@codax.com"
  }
];

class UserDetail extends React.Component{

  render(){

        let rows = this.props.users.map(function(row,index){
          return(
            <tr key={index}>
              <td>{row._id}</td>
              <td>{row.isActive}</td>
              <td>{row.age}</td>
              <td>{row.name}</td>
              <td>{row.gender}</td>
              <td>{row.email}</td>
            </tr>
          );
        }

    );

    return (<tbody>{rows}</tbody>);

  }


}

export default class Users extends React.Component {

  render() {

    return(
      <span>
      <h1>React Basic</h1>
      <div>
        <table>
          <tr>
          <th>Id</th>
          <th>isActive</th>
          <th>Age</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          </tr>
          <UserDetail users={USERS}/>
        </table>
      </div>
      </span>

    );


  }

}
