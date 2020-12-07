import React, { Component } from 'react'
import { Route, HashRouter, Switch } from "react-router-dom"
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
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
import Search from "../pages/search/search";
import Detail from "../pages/detail/detail";

export default class AppRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App pagh='/'>
                    <CacheSwitch>
                        <CacheRoute exact path="/" component={Home}></CacheRoute>
                        <Route exact path="/life" component={Life}></Route>
                        <Route exact path="/my" component={My}></Route>
                        <Route exact path="/shop" component={Shop}></Route>
                        <Route exact path="/city" component={City}></Route>
                        <CacheRoute exact path="/search" component={Search}></CacheRoute>
                        <Route exact path="/detail/:id" component={Detail}></Route>
                        <Route exact path="*" component={NotFound}></Route>
                    </CacheSwitch>
                </App>

            </HashRouter>
        )
    }
}