import React,{Component} from 'react'
import { NavLink } from "react-router-dom"
import "./style.scss"

export default class My extends Component{
    render(){
        return(
            <div className="navFooter">
                <ul className="clearfix">
                    <li>
                        <NavLink exact to="/">
                            <i className="fs iconfont icon-home"></i>
                             <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">
                            <i className="fs iconfont icon-shoppingcopy"></i>
                             <span>商城</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/life">
                            <i className="fs iconfont icon-shenghuo"></i>
                             <span>生活服务</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my">
                            <i className="fs iconfont icon-my"></i>
                             <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}