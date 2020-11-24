import React,{Component} from 'react'
import api from "../../../utils/api"
import "./style.scss"
export default class HomeBar extends Component{
    constructor(){
        super();
        this.state = {
            datas:[]
        }
    }
    render() {
        return (
            <div className="homebar">
                {
                    this.state.datas.map((item,i)=>{
                        return(
                            <div key={i}>
                                <img src={item.image_src} alt=""/>
                                <div className="name">{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    async componentDidMount(){
        let datas = await api.catItems();
        this.setState({datas});
        console.log(datas)
    }
}