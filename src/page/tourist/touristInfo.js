import React from 'react'
import { Redirect } from 'react-router-dom'
import { NavBar, InputItem, WingBlank, WhiteSpace, TextareaItem, Button } from 'antd-mobile'
import AvatorSelector from '../../component/avator-selector/avator-selector'
import BasicInfo from '../../component/tourist/basicinfo'
import { connect } from 'react-redux'
import {update} from '../../redux/user.redux'
import '../../scss/page/touristinfo.scss'
@connect(
  state => state.user,
  { update }
)
class TouristInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      province: '',
      scenery:'',
      time:'',
      copy: ''
    }
  }

  selectAvator (e) {
    this.setState({
      avator:e
    })
  }
  saveBasic (value,index) {
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
        >完善个人信息</NavBar>      
        <AvatorSelector selectAvator={e => this.selectAvator(e)}></AvatorSelector>
        <BasicInfo saveBasic={(val,e) => this.saveBasic(val, e)}></BasicInfo>
        <WingBlank><Button type="primary" onClick={()=>this.props.update(this.state)}>保存</Button></WingBlank>
      </div>
    )
  }
}

export default TouristInfo