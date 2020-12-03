import React,{Component} from "react"
import { connect } from "react-redux"
import * as cityActions from '../../actions/city'
import { bindActionCreators } from 'redux'

import PublicHeader from '../../components/publicHeader/index'
import HotCity from './hotCity/index'
import "./style.scss"

 class City extends Component{
    constructor(){
        super();
        this.state = {
            currentCity:'石家庄'
        }
    }

    onCityNameHandler = (cityName) =>{
        this.props.cityActions.updateCity({
            cityName
        })
    }

    render(){
       return(
           <div>
               <PublicHeader title={'城市'}></PublicHeader>
                <div className="currentCity">当前城市：{this.props.city.cityName}</div>
                <HotCity cityNameHandler={this.onCityNameHandler}></HotCity>
           </div>
       )
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}
function mapDispatchToProps(dispatch){
    return{
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)