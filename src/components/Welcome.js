import React from 'react'
import {get_start} from '../actions/'
import {connect} from 'react-redux'
import Particles from 'react-particles-js'


class Welcome extends React.Component {
    state = {
        name: ''
    }
    handleClick = () => {
        this.props.get_start(this.state.name)
    }
    handleChange = (e) => {
        this.setState({name: e.target.value})
    }
    render() {
        return (
            <React.Fragment>
                <div id="welcome">
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
                        <h1>Quiz App</h1>
                        <div style={{
                            margin: '30px 0 10px'
                        }}>
                            <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name" className="name"/>
                            <button className="start" onClick={this.handleClick}>Start</button>
                        </div>
                        <h2>Enter the name and take the Quiz.</h2>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, {get_start})(Welcome)