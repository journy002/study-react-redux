import { createStore } from 'redux';

const initialState = {
    counter: 0,
    text: '',
    list: []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_LIST = 'ADD_LIST';

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
    type: ADD_LIST,
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
                item: state.list.concat(action.item)
            }
    };
};

const store = createStore(reducer);
console.log(store.getState());
const listener = () => {
    const state = store.getState();
    console.log(state);
};

store.subscribe(listener);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('text change'));
store.dispatch(addList({ id: 1, text: 'add text in list' }));
