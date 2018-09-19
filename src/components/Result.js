import React, { Component } from 'react'
export default class Result extends Component {
  render() {
    console.log(this.props)
    return (
      <div id="result">
        <h1>Congratulations {this.props.name} !!</h1>
        <h2>You score {this.props.score} out of {this.props.totalQuestion}</h2>
        <button className="try">Try Again</button>
      </div>
    )
  }
}
