import React,{Component} from 'react'
import FootNav from "../../components/footNav"
import Request from "../../utils/api"

import Swiper from "../../components/swiper"
import HomeHeader from "./homeHeader"
import HomeBar from "./homeBar"



export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            Swipers:[]
        }
    }
    render(){
        return(
            <div>
                <HomeHeader></HomeHeader>
                <Swiper banners={this.state.Swipers}></Swiper>
                <HomeBar></HomeBar>
                Home
                <FootNav></FootNav>
            </div>
        )
    }
    async componentDidMount(){
        let Swipers = await Request.HomeSwipers();
        console.log(Swipers)
        this.setState({Swipers})
    }
}