import {combineReducers} from 'redux'
import questions from './questionsReducer'
import ui from './uiReducer'
const rootReducer = combineReducers({
    questions,
    ui
})

export default rootReducer