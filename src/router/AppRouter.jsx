import React,{Component} from 'react'
import {Route,HashRouter,Switch } from "react-router-dom"
import "../static/css/font.css"
//pages
import Home from "../pages/home";
import Life from "../pages/life";
import My from "../pages/my";
import Shop from "../pages/shop";
import NotFound from "../pages/notfound";

export default class AppRouter extends Component{
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/life" component={Life}></Route>
                    <Route exact path="/my" component={My}></Route>
                    <Route exact path="/shop" component={Shop}></Route>
                    <Route exact path="*" component={NotFound}></Route>
                </Switch>
            </HashRouter>
        )
    }
}