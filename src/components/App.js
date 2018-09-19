import React, { Component } from 'react'
import Header from './Header'
import Questions from './Questions'
import Result from './Result'
import {connect} from 'react-redux'
import Welcome from './Welcome'

class App extends Component {
  render() {
    return (
      <div>
        {
          (!this.props.isStart) ? 
          <Welcome/> : 
          (this.props.isFinish) ? 
          <Result 
          score={this.props.score}
          totalQuestion={this.props.totalQuestion}
          name={this.props.username}
          /> 
          :
          <React.Fragment>
            <Header/>
            <Questions/>
          </React.Fragment>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFinish: state.quiz.finishQuiz,
  score: state.quiz.score,
  totalQuestion: state.quiz.questions.length,
  isStart: state.quiz.startQuiz,
  username: state.quiz.userName
})

export default connect(mapStateToProps)(App)
