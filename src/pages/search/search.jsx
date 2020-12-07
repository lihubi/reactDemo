import React, {Component} from 'react'
import {SearchBar} from "antd-mobile";
import Request from '../../utils/api'
import PublicHeader from '../../components/publicHeader/index'
import Listcontain from '../../components/listbox/listcontain'
import "./style.scss"

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            word: '',
            List: []
        }
    }

    render() {
        return (
            <div className="search" ref="onPullUp">
                <div className="SearchBar">
                    <PublicHeader title={'搜索'}></PublicHeader>
                    <SearchBar
                        placeholder="请输入搜索内容"
                        value={this.state.word}
                        onChange={this.handleChange}
                        onSubmit={this.toSearch}
                    />
                </div>
                <div style={{marginTop:'56px'}}>
                    <Listcontain isSearch={false} onRef={this.onRef}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        //触底
        window.addEventListener("scroll",this.handle)
    }
    componentWillUnmount(){
        // 组件将要卸载，取消监听window滚动事件
        window.removeEventListener('scroll', this.handle);
    }
    onRef = (ref) => {
        this.child = ref
    }
    handle = ()=>{
        let onPullUpHeight=this.refs.onPullUp.clientHeight; //数据的高
        let documentHeight=document.documentElement.clientHeight; //屏幕的高
        let documentTop=document.documentElement.scrollTop;  //滚动的高
        let isbtm = Math.floor(onPullUpHeight-(documentHeight+documentTop-56))<=0;
        if(onPullUpHeight>documentHeight&&isbtm){
            //滚动到底部，再次加载
            console.log('加载')
            this.child.getmsg();
        }
    }
    handleChange = e => {
        //双向绑定
        this.setState({
            word: e
        })
    }
    toSearch = e => {
        let query = this.state.word;
        this.child.getmsg({query});
    }

}