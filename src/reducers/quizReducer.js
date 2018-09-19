import {
    LOAD_QUESTIONS,
    NEXT_QUESTION,
    CHOOSE_ANSWER,
    GET_STARTED,
    RESET
} from "../actions/types";

const defaultState = {
    startQuiz: false,
    finishQuiz: false,
    nextButtonDisabled: true,
    questions: [],
    questionCount: 1,
    chooseAnswer: '',
    score: 0,
    userName: ''
}

const quizReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_QUESTIONS:
            return {
                ...state,
                // questions: [...state.questions].concat([action.payload])
                questions: action.payload
            }
        case NEXT_QUESTION:
            let score, isFinish = state.finishQuiz,
                count;

            (state.questions[state.questionCount - 1].answer === state.chooseAnswer) ? score = state.score + 1: score = state.score;
            if (state.questions.length >= state.questionCount) {
                if (state.questions.length === state.questionCount) {
                    isFinish = true;
                }
                count = state.questionCount + 1
            }
            return {
                ...state,
                questionCount: count,
                nextButtonDisabled: true,
                score,
                finishQuiz: isFinish
            }

        case GET_STARTED:
            return {
                ...state,
                startQuiz: true,
                userName: action.payload
            }
        case CHOOSE_ANSWER:
            return {
                ...state,
                chooseAnswer: action.payload,
                nextButtonDisabled: false
            }
        case RESET:
            return defaultState
        default:
            return state
    }
}

export default quizReducer