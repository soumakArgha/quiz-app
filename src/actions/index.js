import axios from 'axios'
import {
    CHOOSE_ANSWER,
    LOAD_QUESTIONS,
    NEXT_QUESTION,
    GET_STARTED,
    RESET
} from './types'
import {
    db
} from '../firebase'

export const choose_answer = (answer) => {
    return dispatch => {
        dispatch({
            type: CHOOSE_ANSWER,
            payload: answer
        })
    }
}

export const load_questions = () => {
    return dispatch => {
        // axios.get('/api/questions')
        //     .then(questions => {
        //         dispatch({
        //             type: LOAD_QUESTIONS,
        //             payload: questions.data
        //         })
        //     })
        //     .catch(err => console.log(err))

        // fetch('http://localhost:5000/api/questions', {mode: 'no-cors'})
        // .then(res => res.json())
        // .then(questions => {
        //     console.log(questions)
        //     dispatch({
        //         type: LOAD_QUESTIONS,
        //         payload: questions
        //     })
        // }).catch(err => console.log(err))


        db.collection('quiz_questions').orderBy("id", "asc").get().then(snap => {
            let questions = []
            snap.forEach(doc => {
                questions.push(doc.data())
            })
            dispatch({
                type: LOAD_QUESTIONS,
                payload: questions
            })
        })
    }
}

export const get_start = (name) => {
    return {
        type: GET_STARTED,
        payload: name
    }
}

export const next_question = () => {
    return {
        type: NEXT_QUESTION
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}