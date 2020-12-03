import React, { Component } from 'react'
import { Route, HashRouter, Switch } from "react-router-dom"
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import "../static/css/font.css"
//pages
import Home from "../pages/home";
import Life from "../pages/life";
import My from "../pages/my";
import Shop from "../pages/shop";
import NotFound from "../pages/notfound";
import City from "../pages/city"
import App from "../pages/app"

export default class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App pagh='/'>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/life" component={Life}></Route>
                        <Route exact path="/my" component={My}></Route>
                        <Route exact path="/shop" component={Shop}></Route>
                        <Route exact path="/city" component={City}></Route>
                        <Route exact path="*" component={NotFound}></Route>
                    </Switch>
                </App>

            </HashRouter>
        )
    }
}