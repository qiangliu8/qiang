import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import '../../scss/component/avatorSelector.scss'
import imglog1 from '../../assets/img/tourist/p1.jpg'
import imglog2 from '../../assets/img/tourist/p2.jpg'
import imglog3 from '../../assets/img/tourist/p3.jpg'
class Carousels extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      data: ['', '' ,''],
      imgHeight: 176,
    }
  }
  componentDidMount () {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [imglog1, imglog2 ,imglog3],
      });
    }, 100);
  }
  render () {
    return (
      <div>
          <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          //beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                // src={`../../assets/img/${val}`}
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default Carousels
