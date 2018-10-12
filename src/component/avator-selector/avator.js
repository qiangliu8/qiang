import React from 'react'
import { Card, WhiteSpace,WingBlank } from 'antd-mobile'
import '../../scss/component/avatorSelector.scss'

class Avator extends React.Component{
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const avator = 'beiying,girl,mylove,txbb'.split(',').map(e => ({
      icon: require(`../../assets/img/avator/${e}.jpg`),
      text:e
    }))
    return (
      <div >     
        {avator.map((val, index) => (
          <div key={index}>
            <WingBlank size="lg">
            <WhiteSpace size="lg" />
              <Card >
                  <Card.Header
                    title="浙江杭州"
                    thumb={val.icon}
                    extra={<span>舟山风景区</span>}
                  />
                  <Card.Body>
                    <div>首席驴客</div>
                  </Card.Body>
                  <Card.Footer content="合肥" extra={<div>小强</div>} />
              </Card>
              </WingBlank>
            </div>
            ))  
          }
      </div>
    )
  }
}

export default Avator