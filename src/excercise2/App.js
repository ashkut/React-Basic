/**
 * Created by ttn on 30/12/16.
 */

/**
 * Make Twitter Tweet like plugin, where Tweet button style should change dynamically according to state.
 * For eg;- Tweet button should be not clickable if user is submitting blank tweet or he exceeds maximum character limit.
 * Once the user types,Tweet button should be visible.
 *
 */

import React from 'react'
import Tweet from './Tweet'

export default class App extends React.Component {

  render(){
    return(

      <div>
        <Tweet/>
      </div>

    )
  }

}
