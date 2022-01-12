import {
    combineReduser,
    createStore
} from 'redux'
import timerReducer from './timerReducer'

let reducer = combineReduser({
        timerPage: timerReducer
    }

)

let store = createStore(reducer)

export default store