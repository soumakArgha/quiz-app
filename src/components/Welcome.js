import React from 'react'
import {get_start} from '../actions/'
import {connect} from 'react-redux'

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
                    <h1>Quiz App</h1>
                    <div>
                        <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="Enter your name" className="name"/>
                        <button className="start" onClick={this.handleClick}>Start</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, {get_start})(Welcome)