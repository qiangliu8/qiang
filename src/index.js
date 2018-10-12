import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import './config/config'
import reducers from './reducer'
import AuthRoute from './component/auth/authRoute'
import Login from './page/login/login'
import Register from './page/register/register'
import GuideInfo from './page/guide/guideInfo'
import Guide from './page/guide/guide'
import TouristInfo from './page/tourist/touristInfo'
import Tourist from './page/tourist/tourist'
const store  = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))


//页面
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/touristinfo' component={TouristInfo}></Route>
                    <Route path='/guideInfo' component={GuideInfo}></Route>
                    <Route path='/guide' component={Guide}></Route>
                    <Route path='/tourist' component={Tourist}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </Switch>
            </div>
        </BrowserRouter>    
    </Provider>),
    document.getElementById('root')
)
