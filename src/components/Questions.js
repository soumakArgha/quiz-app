import React, { Component } from 'react'
import {
    Button
} from '@material-ui/core'
import {connect} from 'react-redux'
import {choose_answer, load_questions, next_question} from '../actions'
import Question from './Question'

class Questions extends Component {

    componentDidMount = () => {
        this.props.load_questions();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {
                        this.props.questions.map(((question, i) => {
                            if(i === this.props.questionCount - 1) {
                                return <Question 
                                key={question.id}
                                question={question.question}
                                options={question.options}
                                choose_answer={this.props.choose_answer}
                                questionCount={this.props.questionCount}
                                totalLength={this.props.questions.length}
                                />
                            }
                        }))
                    }



                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                    {
                        (this.props.nextButtonDisabled) ? 
                        <Button variant='contained' disabled style={{
                            height: '45px',
                            width: '100px',
                        }}>Next</Button> : 
                        <Button variant='contained' onClick={this.props.next_question} style={{
                            height: '45px',
                            width: '100px',
                            backgroundColor: '#4f6df5',
                            color: '#fff'
                        }}>Next</Button>
                    }
                
                    </div>
                
                </div>
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.quiz.questions,
        questionCount: state.quiz.questionCount,
        nextButtonDisabled: state.quiz.nextButtonDisabled
    }
}

export default connect(mapStateToProps, {
    choose_answer, 
    load_questions, 
    next_question
})(Questions);