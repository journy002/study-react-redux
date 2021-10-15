import { createStore } from 'redux';

// createStore는 스토어를 만들어주는 함수
// 리액트 프로젝트에서는 단 하나의 스토어를 만든다.

/* 리덕스에서 관리 할 상태 정의 */
const initialState = {
    counter: 0,
    text: '',
    list: [],
};

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 정의한다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성함수 정의 */
// 액션 생성함수는 주로 camelCase로 정의한다.


function increase(){
    return {
        type: INCREASE // 액션 객체에는 type값이 필수
    }
}

// 화살표 함수로 작성하는 것이 더욱 코드가 간단함.
const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있다.
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어 보자
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 한다. (리액트도 마찬가지.)

