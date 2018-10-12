import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'

@withRouter
  @connect(
    null,
    { loadData }
)
class AuthRoute extends React.Component{

  componentDidMount () {
    const publicList = ['/login', 'register'] 
    const pathName = this.props.location.pathname
    if (publicList.indexOf(pathName) > -1) {
      return null
    }
    //获取用户信息
    axios.get('/user/info').then(res => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          this.props.loadData(res.data.data)
          console.log(res.data.data.avator)
          if (res.data.data.avator) {
            this.props.history.push(`/${res.data.data.type}`)
          } else{
            this.props.history.push(`/${res.data.data.type}info`)
          }
          //有登录信息
        } else {
          this.props.history.push('/login')
        }
      }
    })
    //是否登录
  }
  render () {
    return null
  }
}

export default AuthRoute