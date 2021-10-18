import { createStore } from "redux";

// 초기값 설정
const initialState = {
    counter: 0,
    text: '',
    list: [],
};

// 액션 타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_LIST = 'ADD_LIST';

// 액션 생성함수 정의
const increase = () => ({
    type: INCREASE
});

const decrease = () => ({
    type: DECREASE
});

const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
});

const addList = (item) => ({
    type:ADD_LIST,
    item
});

function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREASE :
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE :
            return {
                ...state,
                counter: state.counter - 1
            }

        case CHANGE_TEXT : 
            return {
                ...state,
                text: action.text
            }

        case ADD_LIST : 
            return {
                ...state,
                list: state.list.concat(action.list)
            }

        default: return state
    }
}

const store = createStore(reducer);

const listener = () => {
    const state = store.getState();
    console.log(state)
}

const unsubscribe = store.subscribe(listener)

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('change text test'));
store.dispatch(addList({ id: 1, text: 'addList test' }));