import React from 'react'
import { Redirect } from 'react-router-dom'
import Logo from '../../component/logo/logo'
import { Toast, List, Radio, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import '../../scss/page/register.scss'


@connect(
  state => state.user,
  { register }
)

class Register extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd:'',
      type:'tourist'
    }
    this.login = this.login.bind(this)
  }

  goRegister () {
    this.props.register(this.state)
    console.log(this.state)
  }
  login () {
    this.props.history.push('/login')
  }
  handleChange (key,value) {
    this.setState({
      [key]:value
    })
  }
  // componentDidUpdate (props) {
  //   if (this.props.msg) {
  //     Toast.fail(this.props.msg);
  //     //this.props.msg=''
  //   }
  // }
  render () {
    const RadioItem = Radio.RadioItem
    return (
      <div className="registerPage">
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/>: null}
        <Logo />
        <List className="registerInput">
          {/* {this.props.msg ? <p className="err-msg">{this.props.msg}</p> : null} */}
          <InputItem onChange={(e)=>this.handleChange('user',e)}>账号</InputItem>
          <InputItem onChange={(e)=>this.handleChange('pwd',e)}>密码</InputItem>
          <InputItem onChange={(e)=>this.handleChange('repeatpwd',e)}> 确认密码</InputItem>
          <RadioItem checked={this.state.type === 'tourist'} onChange={()=>this.handleChange('type','tourist')}>
            游客
          </RadioItem>
          <RadioItem checked={this.state.type === 'guide'} onChange={()=>this.handleChange('type','guide')}>
            导游
          </RadioItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <WingBlank>
        <Button type='primary' inline size="large" onClick={this.login}>返回</Button>
          <Button type='primary' inline size="large" onClick={()=>this.goRegister()}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register