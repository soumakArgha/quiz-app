import React, { Component } from 'react'
import { Button} from '@material-ui/core';
import {connect} from 'react-redux'
class Footer extends Component {
  render() {
    return (
      <div id="footer">
        
      {
        (this.props.answer === '') ? 
        <React.Fragment>

            {/* <Button variant='contained' style={{
              height: '45px',
              width: '100px',
              backgroundColor: '#4f6df5',
              color: '#fff'
          }}>Skip</Button> */}
          <Button variant='contained' disabled style={{
              height: '45px',
              width: '100px',
          }}>Next</Button>
        </React.Fragment>
          : 
          <React.Fragment>
          {/* <Button variant='contained' disabled style={{
            height: '45px',
            width: '100px'
        }}>Skip</Button> */}
        <Button variant='contained' onClick={this.props.next_question} style={{
              height: '45px',
              width: '100px',
              backgroundColor: '#4f6df5',
              color: '#fff'
          }}>Next</Button>
        </React.Fragment>
      }
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    answer: state.questions.answer
  }
}

export default connect(mapStateToProps)(Footer)