import React, { Component } from 'react'
import {Button} from '@material-ui/core'
export default class Result extends Component {
  render() {
    return (
      <div id="result">
        <h1>Congratulations</h1>
        <h2>You score {this.props.score} out of {this.props.totalQuestion}</h2>
        <button className="try">Try Again</button>
      </div>
    )
  }
}
