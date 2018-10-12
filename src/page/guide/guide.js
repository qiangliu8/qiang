import React from 'react'
import { NavBar, Icon ,InputItem} from 'antd-mobile'
import { avatorSelector } from '../../component/avator-selector/avator-selector'

class Guide extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title:''
    }
  }

  handleOnChange (value,index) {
    this.setState({
      [value]:index
    })
  }

  render () {
    return (
      <div>
        我擦
      </div>
    )
  }
}

export default Guide