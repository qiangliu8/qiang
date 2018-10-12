import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavBar, InputItem, WingBlank, WhiteSpace, TextareaItem, Button } from 'antd-mobile'
import AvatorSelector from '../../component/avator-selector/avator-selector'
import { connect } from 'react-redux'
import {update} from '../../redux/user.redux'


@connect(
  state => state.user,
  { update }
)
class GuideInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      desc:''
    }
  }

  selectAvator (e) {
    this.setState({
      avator:e
    })
  }
  handleOnChange (value,index) {
    this.setState({
      [value]:index
    })
  }
  render () {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect && path !== redirect ? <Redirect to={this.props.redirectTo}></Redirect> : null}
         <NavBar
          mode="light"
        >完善导游基本信息</NavBar>      
        <AvatorSelector selectAvator={e => this.selectAvator(e)}></AvatorSelector>
        <WhiteSpace></WhiteSpace>
        <WingBlank><h4>基本信息</h4> </WingBlank>
        <WingBlank><InputItem onChange={(e) => this.handleOnChange('title', e)}>姓名</InputItem></WingBlank>
        <WingBlank><TextareaItem onChange={(e) =>  this.handleOnChange('desc', e)} title="基本描述" autoHeight rows={1}></TextareaItem></WingBlank>
        <WhiteSpace size="lg"></WhiteSpace>
        <WingBlank><Button type="primary" onClick={()=>this.props.update(this.state)}>保存</Button></WingBlank>
      </div>
    )
  }
}

export default GuideInfo