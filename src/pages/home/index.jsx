import React,{Component} from 'react'
import FootNav from "../../components/footNav"
import Request from "../../utils/api"
import { connect } from 'react-redux'

import Swiper from "../../components/swiper"
import HomeHeader from "./homeHeader"
import HomeBar from "./homeBar"



 class Home extends Component{
    constructor(){
        super();
        this.state = {
            Swipers:[]
        }
    }
    render(){
        return(
            <div>
                <HomeHeader city={this.props.city.cityName}></HomeHeader>
                <Swiper banners={this.state.Swipers}></Swiper>
                <HomeBar></HomeBar>
                
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

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default connect(
    mapStateToProps
)(Home)