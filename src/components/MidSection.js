import React, { Component } from 'react'
import {Icon, MobileStepper} from '@material-ui/core'
import {connect} from 'react-redux'
import {get_answer, load_questions, next_question} from '../actions/'
import _ from 'lodash'
import CssTransitionGroup from 'react-addons-css-transition-group'
import Footer from './Footer';

class MidSection extends Component {

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
        this.props.get_answer(list.children[1].textContent)
    }

    componentDidMount = () => {
        this.props.load_questions();
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.questions.map(((question, i) => {
                        if(i === this.props.currentQuestion) {
                            return <div id="quizsection" key={this.props.questions[this.props.currentQuestion].id}>
                                <h1>{this.props.questions[this.props.currentQuestion].question}</h1>
                                <ul>
                                    {
                                        this.props.questions[this.props.currentQuestion].options.map((option, i) => {
                                            return <li onClick={this.handleClick}  key={i}>
                                                        <Icon>panorama_fish_eye</Icon>
                                                        <span>{option}</span>
                                                    </li> 
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    }))
                }
                
                    
                {/* <MobileStepper 
                variant="dots"
                steps={this.props.questions.length+1}
                activeStep={this.props.currentQuestion}
                position="static"
                style={{
                    zIndex: '10',
                    width: '50%'
                }}
                /> */}
                 
                <Footer next_question={this.props.next_question}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions.questions,
        currentQuestion: state.questions.currentQuestion
    }
}

export default connect(mapStateToProps, {
    get_answer, 
    load_questions, 
    next_question
})(MidSection);