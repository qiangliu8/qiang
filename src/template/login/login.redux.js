import axios from 'axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
const initState = {
  isLogin: false,
  user: '刘强',
  age:21
}
export function Login (state = initState, action) {
  console.log(state,action)
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true }  
    case LOGOUT:
      return { ...state, isLogin: false }
      case USER_DATA:
      return { ...state, user: action.payload.user, age: action.payload.age }
    default:
      return state
  }
}

//action
export function getUserData () {
  //dispatch用来通知数据修改
  return dispatch => {
    axios.get('/data')
    .then(res => {
      if (res.status === 200) {
        dispatch(UserData(res.data))
        //this.setState({data:res.data})
      }
    console.log(res)
  })
  }
}
export function UserData (data) {
  return {type:USER_DATA,payload:data}
}
export function login () {
  return {type:LOGIN}
}
export function logout () {
  return {type:LOGOUT}
}