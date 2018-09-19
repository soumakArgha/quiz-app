import React, { Component } from 'react'
import Particles from 'react-particles-js'
import {connect} from 'react-redux'
import {reset} from '../actions/'
class Result extends Component {

  render() {
    return (
      <div id="result">
        <Particles 
            params={{
                "particles": {
                    "number": {
                      "value": 100,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "repulse"
                      }
                    }
                }
            }}
            height="100vh"
            width="100vw"
        />
        <div style={{
          position: 'absolute'
        }}>
          <h1>Congratulations {this.props.name} !</h1>
          <h2>You score {this.props.score} out of {this.props.totalQuestion}</h2>
          <button className="try" onClick={this.props.reset}>Try Again</button>
        </div>
        
      </div>
    )
  }
}


export default connect(null, {reset})(Result)