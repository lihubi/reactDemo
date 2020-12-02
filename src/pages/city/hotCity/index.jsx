import React,{Component} from "react"
import "./style.scss"

export default class HotCity extends Component{

    constructor(){
        super();
        this.state = {
            cityList:[
                {id:1001,name:"北京"},
                {id:1002,name:"上海"},
                {id:1003,name:"石家庄"},
                {id:1004,name:"杭州"},
                {id:1005,name:"深圳"},
                {id:1006,name:"重庆"},
                {id:1007,name:"安徽"},
            ]
        }
    }

    changeCity(cityName){
        this.props.cityNameHandler(cityName);
        window.history.back(-1);
    }
    render(){
        return(
            <div className="hotCityBox">
                <div className="hotCityTitle">热门城市</div>
                <div className="listBox">
                    {
                        this.state.cityList.map((item,i)=>{
                            return(
                            <div className="lists" key={i} onClick={this.changeCity.bind(this,item.name)}>{item.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
} 