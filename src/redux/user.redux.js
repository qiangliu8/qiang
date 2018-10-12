import axios from "axios";
import { Toast } from 'antd-mobile'
import { getRedirectPath } from '../util/util'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
    redirectTo: '',
    msg: '',
    user: '',
    type: ''
}

function errorMsg(msg) {
    Toast.fail(msg)
    return { msg, type: ERROR_MSG }
}

function authSuccess (data) {
    // const { pwd, ...data } = obj
    
    return { type: AUTH_SUCCESS, playload: data }
}
export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state, msg: '', redirectTo: getRedirectPath(action.playload), ...action.playload }
        case ERROR_MSG:
            return {...state, msg: '', msg: action.msg }
        case LOAD_DATA:
            return { ...state, ...action.playload } 
        default:
            return state 
    }
}

export function login({ user, pwd }) {
    if (!user || !pwd) return errorMsg('用户密码必须输入')
    return dispatch => {
        axios.post('/user/login', { user, pwd }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }

}

export function register({ user, pwd, repeatpwd, type }) {
    if (!user || !pwd || !type) return errorMsg('用户密码必须输入')
    if (pwd !== repeatpwd) return errorMsg('密码两次必须保持一致')
    return dispatch => {
        axios.post('/user/register', { user, pwd, type }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                dispatch(authSuccess({ user, pwd, type }))
            } else {
                dispatch(errorMsg((res.data.msg)))
            }
        })
    }
}

export function loadData (userinfo) {
    return { type: LOAD_DATA, playload: userinfo }
}
export function update (data) {
    return dispatch => {
        axios.post('/user/update', data).then(
            res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            }
        )
    }
}
// export function userinfo () {
//     //获取用户信息
//     return dispatch => {
//         axios.get('/user/info').then(res => {
//             if (res.status === 200) {
//                 if (res.data.code == 0) {
//                     this.props.loadData(res.data)
//                 //有登录信息
//               } else {
//                 this.props.history.push('/login')
//               }
//             }
//           })   
//     }
// }