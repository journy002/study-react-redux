import { combineReducers } from "redux";
import counter from './counter'
import todos from './todos'

// 리듀서를 합치는 작업은 combineReducers 함수를 사용한다.
const rootReducer = combineReducers({
    counter,
    todos,
})

export default rootReducer;