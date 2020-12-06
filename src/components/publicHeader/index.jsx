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
                >
                  <div style={{
                  whiteSpace: 'nowrap',
                  overflow:'hidden',
                  maxWidth:'13em',
                  textOverflow:'ellipsis',
                  }}>{this.props.title}</div>
                </NavBar>
            </div>
        )
    }
}