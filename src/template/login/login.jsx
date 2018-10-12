import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { login ,getUserData} from './login.redux'
import { Redirect } from 'react-router-dom'

//两个reducer 每个都有有state
@connect(
  state => state.Login,
  { login ,getUserData}
)
class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      data:{}
    }
  }
  componentDidMount () {
    this.props.getUserData()
  }
  render () {
    return (<div>
      <h2>尊敬的{this.props.user},年龄{this.props.age}</h2>
      {this.props.isLogin ? <Redirect to='/dashboard'></Redirect> : null}    
      <h2>你没有权限，请登陆！</h2>
      <button onClick={this.props.login}>登陆</button>
    </div>)
  }
}
export  default Login