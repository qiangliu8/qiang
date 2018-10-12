import React from 'react'
import { Redirect } from 'react-router-dom'
import { Toast,List, InputItem,WingBlank, WhiteSpace,Button} from 'antd-mobile'
import Logo from '../../component/logo/logo'
import { login } from '../../redux/user.redux'
import { connect } from 'react-redux'
import '../../scss/page/login.scss'

@connect(
  state => state.user,
  { login }
)
class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pwd:''
    }
    this.register = this.register.bind(this)
  }
  goLogin () {
    this.props.login(this.state)
    //Toast.fail(this.props.msg);
  }
  register () {
    this.props.history.push('/register')
  }
  handleChange (index,value) {
    this.setState({
      [index]: value
    })
  }
  componentDidUpdate (props) {
    // if (this.props.msg) {
    //   Toast.fail(this.props.msg);
    // }
  }
  render () {
    return (
      <div className="loginPage">
          {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/>: null}
        <Logo />
        <WingBlank>
          <List className="loginInput">
          {/* {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null} */}
            <InputItem onChange={(e) => this.handleChange('user',e)}>账号</InputItem>
            <InputItem onChange={(e) => this.handleChange('pwd',e)} type="password">密码</InputItem>
          </List>
          <Button type='ghost' inline size="large" onClick={()=>this.goLogin()}>登录</Button>
          <Button  onClick={this.register} inline size="large" type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login