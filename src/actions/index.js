import axios from 'axios'
import {GET_ANSWER, LOAD_QUESTIONS, NEXT_QUESTION} from './types'
export const get_answer = (answer) => {
    return dispatch => {
        dispatch({
            type: GET_ANSWER,
            payload: answer
        })
    }
}

export const load_questions = () => {
    return dispatch => {
        axios.get('/api/questions')
            .then(questions => {
                dispatch({
                    type: LOAD_QUESTIONS,
                    payload: questions.data
                })
            })
            .catch(err => console.log(err))

        // fetch('http://localhost:5000/api/questions', {mode: 'no-cors'})
        // .then(res => res.json())
        // .then(questions => {
        //     console.log(questions)
        //     dispatch({
        //         type: LOAD_QUESTIONS,
        //         payload: questions
        //     })
        // }).catch(err => console.log(err))
    }
}


export const next_question = () => {
    
    return {
        type: NEXT_QUESTION
    }
}