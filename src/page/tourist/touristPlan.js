import React from 'react'
import { SearchBar, NavBar, Icon, InputItem, Tabs, WingBlank ,WhiteSpace,TextareaItem, TabBar, Button} from 'antd-mobile'
import { district, provinceLite } from 'antd-mobile-demo-data';
import  Carousels from '../../component/lantern/carousel'
import Avator from '../../component/avator-selector/avator'
import SearchBars from '../../component/tourist/search'
class TouristPlan extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  renderContent = tab =>
  (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    <p>{tab.title}</p>
  </div>);
  render () {
    const tabs = [
      { title: '觅柳寻花' },
      { title: '计划Start' },
      { title: 'Soul空间' },
      { title: '分享一下' },
    ];
    return (
      <div>
        <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.back()}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
              <Icon key="1" type="ellipsis" />,
            ]}
        >游客页面</NavBar>
        <Carousels></Carousels>
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          <div>
          <SearchBars></SearchBars>
          </div>
          <div>
          <Avator></Avator>
          </div>
          <div>
          </div>
        </Tabs>
      </div>
    )
  }
}

export default TouristPlan