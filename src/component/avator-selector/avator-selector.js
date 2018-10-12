import React from 'react'
import { Grid, List, Button } from 'antd-mobile'
import PropTypes from 'prop-types'
import '../../scss/component/avatorSelector.scss'

class AvatorSelector extends React.Component{
  // static propTypes = {
  //   selectAvator:PropTypes.func.isRequired
  // }
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const avators = 'beiying,bgirl,boy,dalian,girl,jushou,kawayi,mylove,shenshi,shuaige,txbb,yellowface'.split(',').map(e => ({
      icon: require(`../../assets/img/avator/${e}.jpg`),
      text:e
    }))
    const girdheader = this.state.text ? (<div className="headerinfo"><span>已选择头像：</span><img className="imgheader" src={this.state.icon} alt=""/></div>):<div className="sub-title">请选择默认头像</div>
    return (
      <div>
        <List renderHeader={() => girdheader}>
          <Grid data={avators} columnNum={4} onClick={e => { this.setState(e), this.props.selectAvator(e.text) }} />
        </List>
      </div>
    )
  }
}

export default AvatorSelector