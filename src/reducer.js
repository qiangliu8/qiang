//合并所有reducer ，并且返回
import { combineReducers } from 'C:/Users/admin/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux'
import { user } from './redux/user.redux'

export default combineReducers({ user })

