import React from 'react'
import { Route, Link,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from '../../App.js'
import { logout } from '../login/login.redux'

function wuyun () {
  return <h2>吴云</h2>
}
function sun () {
    return <h2>孙勇彬</h2>
}

@connect(
  state => state.Login,
  { logout }
)
class Dashboard extends React.Component{
  constructor(props) {
    super(props)
  }
  render () {
    const match = this.props.match
    console.log(match)
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app =(
      <div>
        {this.props.isLogin ? <button onClick={this.props.logout}>注销</button> : null}
      <ul>
          <li>
            <Link to={`${match.url}/`}>刘强</Link>
          </li>
          <li>
              <Link to={`${match.url}/wuyun`}>吴云</Link>
          </li>
          <li>
            <Link to={`${match.url}/sun`}>孙勇彬</Link>
          </li>
      </ul>
      <Route path={`${match.url}/`} exact component={App}></Route>
      <Route path={`${match.url}/wuyun`} component={wuyun}></Route>
      <Route path={`${match.url}/sun`} component={sun}></Route>
    </div>
    )
    return this.props.isLogin ? app : redirectToLogin
  }

}
export  default Dashboard