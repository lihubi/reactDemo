
import React from 'react'
import { connect } from "react-redux"
import * as cityActions from "../actions/city" 
import { bindActionCreators } from 'redux'
//项目打开的第一个页面，初始化项目需求
 class App extends React.Component{

    componentDidMount(){
        this.props.cityActions.initCity({
            cityName:'石家庄'
        })
    }

    render(){
        return(
            <div>
                {this.props.children}
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
)(App)