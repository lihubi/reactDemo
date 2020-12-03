import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class PublicHeader extends Component{

    back(){
        //返回到上一级
        //this.props.history.push("/home")
        window.history.back(-1)
    }


    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent={
                        <Icon onClick={this.back} key="0" type="left" style={{ marginRight: '16px' }} />
                    }
                >{this.props.title}</NavBar>
            </div>
        )
    }
}