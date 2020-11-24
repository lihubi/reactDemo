import React,{Component} from 'react'
import FootNav from "../../components/footNav"

import HomeHeader from "./homeHeader";
export default class Home extends Component{
    render(){
        return(
            <div>
                <HomeHeader></HomeHeader>
                Home
                <FootNav></FootNav>
            </div>
        )
    }
}