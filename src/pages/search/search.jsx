import React, {Component} from 'react'
import {SearchBar} from "antd-mobile";
import Request from '../../utils/api'
import ListBox from "../../components/listbox/listbox";
import PublicHeader from '../../components/publicHeader/index'
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
            <div className="search">
                <div className="SearchBar">
                    <PublicHeader title={'搜索'}></PublicHeader>
                    <SearchBar
                        placeholder="请输入搜索内容"
                        value={this.state.word}
                        onChange={this.handleChange}
                        onSubmit={this.toSearch}
                    />
                </div>

                <div className="listbox">
                    {
                        this.state.List.map((item, i) => {
                            return (
                                <ListBox key={i} item={item}></ListBox>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    toSearch = async () => {
        //搜索数据
        let List = await Request.search(this.state.word);
        this.setState({
            List: List.goods
        })
        console.log(List);
    }
    handleChange = e => {
        //双向绑定
        this.setState({
            word: e
        })
    }

}