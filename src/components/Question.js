import React, { Component } from 'react'
import _ from 'lodash'
import {
    Icon
} from '@material-ui/core'

export default class Question extends Component {
    handleClick = (e) => {
        const list = e.target;
        _.forEach(list.parentElement.children, (list) => {
            list.style.backgroundColor = '#fff';
            list.children[0].textContent = "panorama_fish_eye"
            list.style.color = '#444';
        })
        list.style.backgroundColor = '#4f6df5';
        list.style.color = '#fff';  
        list.children[0].textContent = "check_circle"
        this.props.choose_answer(list.children[1].textContent)
    }
    render() {
        return (
            <div id="quizsection">
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <h2>{this.props.questionCount}/{this.props.totalLength}</h2>
                </div>
                <h1>{this.props.question}</h1>
                <ul>
                    {
                        this.props.options.map((option, i) => {
                            return <li onClick={this.handleClick}  key={i}>
                                        <Icon>panorama_fish_eye</Icon>
                                        <span>{option}</span>
                                    </li> 
                        })
                    }
                </ul>
            </div>
        )
    }
}
