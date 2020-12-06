import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

//默认图片
import noimg from "../../static/imgs/noimg.jpg"

export default class ListBox extends Component{

    render() {
        let {item,id} = this.props;
        return(
            <div className="lists">
                <NavLink exact to={"/detail/"+item.goods_id}>
                    <img src={item.goods_small_logo || noimg} alt=""/>
                    <div className="name">{item.goods_name}</div>
                    <div className="price">{item.goods_price}</div>
                </NavLink>
            </div>
        )
    }

}