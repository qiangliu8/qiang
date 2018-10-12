import React from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBars extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  handleClick = () => {
    this.manualFocusInst.focus();
  }


  render () {
    return(
      <div>
      <WingBlank><SearchBar placeholder="唯你，景独好" ref={ref => this.manualFocusInst = ref}/></WingBlank>
      <WhiteSpace />
      <WingBlank><Button onClick={this.handleClick}>用心发现美</Button></WingBlank>
      <WhiteSpace />
    </div>
  )}
}

export default SearchBars