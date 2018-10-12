//import { createStore } from 'redux'

const ADD_MATSER = '刘强'
const ADD_MATSER2 = '吴云'

//1新建store
//通过reducer遍历
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_MATSER:
            return state + 1 
        case ADD_MATSER2:
            return state - 1 
        default :
            return 10
    }
}
// //新建stroe
// const store = createStore(counter)

// //派发事件 传递action
// store.dispatch({ type: '刘' })
// console.log(store.getState())
// store.dispatch({ type: '强' })

//console.log(store.getState())
export function addGUN() {
    return({type:ADD_MATSER})
}
export function removeGUN() {
    return({type:ADD_MATSER2})
}
export function addAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGUN())
        },2000)
    }
}
