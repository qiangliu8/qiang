import React from 'react'
import logoImg from '../../assets/img/logo.png'

import '../../scss/component/logo.scss'

class Logo extends React.Component{

  render () {
    return (
      <div className="logo-container">
        <img src={logoImg} alt=""/>
      </div>
    )
  }
}

export default Logo