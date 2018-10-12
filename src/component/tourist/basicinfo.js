import React from 'react'
import { InputItem, TextareaItem, WhiteSpace, WingBlank } from 'antd-mobile';

class BasicInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      province: '',
      scenery: '',
      time: '',
      copy: ''
    }
  }
  handleOnChange (value,index) {
    this.setState({
      [value]:index
    })
  }
  
  render () {
    return(
      <div >
        <WhiteSpace></WhiteSpace>
        <WingBlank><h4>基本信息</h4> </WingBlank>
        <WingBlank><InputItem onChange={(e) => { this.handleOnChange('province', e), this.props.saveBasic('province', e) }}>常玩省份</InputItem></WingBlank>
        <WingBlank><TextareaItem onChange={(e) => { this.handleOnChange('scenery', e), this.props.saveBasic('scenery', e) }} title="景点向往" autoHeight rows={1}></TextareaItem></WingBlank>
        <WingBlank><InputItem onChange={(e) => { this.handleOnChange('time', e), this.props.saveBasic('time', e) }}>向往天数</InputItem></WingBlank>
        <WingBlank><InputItem onChange={(e) => { this.handleOnChange('copy', e), this.props.saveBasic('copy', e) }}>花销额度</InputItem></WingBlank>
        <WhiteSpace size="lg"></WhiteSpace>
    </div>
  )}
}

export default BasicInfo