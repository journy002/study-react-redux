# 리덕스에서 사용되는 키워드 숙지하기

## 액션(action)
 
- 상태에 어떠한 변화가 필요하게 될때 액션이란 것을 발생시킨다.
  하나의 객체로 표현되며 하단에 표현 형식이 있음.

{
  type: "TOGGLE_VALUE"
}

액션 객체는 type 필드를 필수적으로 가지고 있어야 한다.
그 외의 값들은 개발자 마음대로 넣어줄 수 있다.

{
  type: "ADD_TODO",
  data: {
   id: 0,
   text: "리덕스 배우기"
 }
}

{
  type: "CHANGE_INPUT",
  text: "안녕하세요"
}

## 액션 생성함수(Action Creator)

액션 생성함수(Action Creator)
 - 액션 생성함수는 액션을 만드는 함수
 - 단순히 파라미터를 받아와서 액션 객체 형태로 만들어준다.

export function addTodo(data) {
  return {
       type: "ADD_TODO",
       data
 }
)

export const changeInput = text => ({
   type: "CHANGE_INPUT,
   text
});

리덕스를 사용 할 때 액션 생성함수를 사용하는것이 필수적이진 않다. 액션을 발생 시킬 때마다 직접 액션 객체를 작성할수도 있다.

## 리듀서 (Reducer)

리듀서는 변화를 일으키는 함수이다.
리듀서는 두가지의 파라미터를 받아온다.

function reducer(state, action) {
   // 상태 업데이트 로직
  return alteredState;
}

## 리듀서는 현재 상태와 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환한다.

function counter(state, action) {
 switch(action.type) {
   case 'INCREASE' :
      return state + 1;
   case 'DECREASE' :
      return state - 1;
   default :
      return state;
  }
}

## 스토어 (STORE)

리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 된다.
스토어 안에는, 현재의 앱 상태와 리듀서가 들어가있고 추가적으로 몇가지 내장 함수들이 있다.

## 디스패치 (DISPATCH)

디스패치는 스토어의 내장함수 중 하나이다.
디스패치는 액션을 발생 시키는 것 이라고 이해하면 된다.
dispatch 라는 함수에는 액션을 파라미터로 전달한다.
ex) dispatch(action)

이렇게 호출을 하면, 스토어는 리듀서 함수를 실행시켜 해당 액션을 처리하는 로직이 있다면 액션을 참고 하여 새로운 상태를 만들어준다.

# 리덕스의 3가지 규칙

## 1. 하나의 애플리케이션에 하나의 스토어

여러개의 스토어 사용이 가능은 하나 권장되지 않음.

## 2. 상태는 읽기전용, 리액트의 불변성

리액트에서 state를 업데이트 할시 setState를 사용하고, 배열을 업데이트 할때는 배열 자체에 push를 직접 하지 않고 concat or ...(spread)연산자를 사용하여 기존의 배열은 수정하지 않고 새로운 배열을 만들어 교체하는 방식으로 업데이트를 한다.

리덕스에서도 기존의 상태는 건들이지 않고 새로운 상태를 생성하여 업데이트 해주는 방식으로 해줘야 나중에 개발자 도구를 통해서 뒤로 돌릴 수도 있고 다시 앞으로 돌릴 수도 있다.

## 3. 리듀서는 순수한 함수여야 한다.

- 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받아온다.
- 이전의 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환한다.
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과값을 반환해야 한다.

