import React, { Component } from 'react'
import Header from './Header'
import Questions from './Questions'
import Result from './Result'
import {connect} from 'react-redux'


class App extends Component {
  render() {
    return (
      <div>
        {
          (this.props.isFinish) ? 
          <Result 
          score={this.props.score}
          totalQuestion={this.props.totalQuestion}
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
  totalQuestion: state.quiz.questions.length
})

export default connect(mapStateToProps)(App)
