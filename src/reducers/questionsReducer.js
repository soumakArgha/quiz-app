import { LOAD_QUESTIONS, NEXT_QUESTION, GET_ANSWER} from "../actions/types";

const defaultState = {
    questions: [],
    currentQuestion: 0,
    answer: '',
    rightAnswer: 0
}

const questionsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOAD_QUESTIONS: 
            return {
                ...state,
                questions: action.payload
            }
        case NEXT_QUESTION:
            let score;
            (state.questions[state.currentQuestion].answer === state.answer) ? score = state.rightAnswer + 1 : score = state.rightAnswer;
            if(state.questions.length-1 >= state.currentQuestion) {
                return {
                    ...state,
                    currentQuestion: state.currentQuestion + 1, 
                    rightAnswer: score
                }
            } else return state
        case GET_ANSWER:
            return {...state, answer: action.payload}
        default:
            return state
    }
}

export default questionsReducer