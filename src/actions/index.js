import axios from 'axios'
import {
    CHOOSE_ANSWER,
    LOAD_QUESTIONS,
    NEXT_QUESTION
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
            snap.forEach(doc => {
                dispatch({
                    type: LOAD_QUESTIONS,
                    payload: doc.data()
                })
            })
        })
    }
}


export const next_question = () => {

    return {
        type: NEXT_QUESTION
    }
}