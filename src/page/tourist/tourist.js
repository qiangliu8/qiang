import React from 'react'
import { NavBar, Icon ,InputItem,TabBar} from 'antd-mobile'
import TouristPlan from './touristPlan'
import TouristInfo from './touristInfo'
import '../../scss/page/tourist.scss'

class Tourist extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
    };
  }

  render () {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="Life"
          key="Life"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          badge={0}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          <TouristPlan></TouristPlan>   
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg' }}
          title="My"
            key="my"
            badge={1}
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
         <div>你这个人没信息啊</div>
        </TabBar.Item>
      </TabBar>
    </div>
    )
  }
}

export default Tourist