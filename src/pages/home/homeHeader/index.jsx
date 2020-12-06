import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import { NavBar, Icon, Flex } from 'antd-mobile';

export default class HomeHeader extends Component{
    constructor(){
        super();
        this.state={
            currentCity:'石家庄'
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent={
                        <NavLink exact to="/city">
                            <div style={{display:"flex",alignItems:"center"}}>
                                <span>{this.props.city}</span>
                                <Icon key="0" type="down" style={{ marginRight: '16px' }} />
                            </div>
                        </NavLink>
                    }
                    rightContent={[
                        <NavLink exact to="/search">
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                        </NavLink>
                    ]}
                >首页</NavBar>
            </div>
        )
    }
}