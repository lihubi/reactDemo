import React,{Component} from 'react'
import Request from "../../utils/api"
import ListBox from "../../components/listbox/listbox"

export default class Listcontain extends Component{
    constructor() {
        super();
        this.state = {
            pagenum:1,
            List:[]
        }
    }
    render() {
        return(
            <div className="listbox">
                {
                    this.state.List.map((item, i) => {
                        return (
                            <ListBox key={i} item={item}></ListBox>
                        )
                    })
                }
            </div>
        )
    }
     componentDidMount(){
         this.props.onRef(this);
         if(this.props.isSearch){
             this.getmsg();
         }
    }

    getmsg = async(data = {}) => {
        let {pagenum,List} = this.state;
        //获取商品数据
        let res = await Request.search({pagenum,...data});
        console.log(res);
        let newList = List.concat(res.goods);
        this.setState({
            List: newList,
            pagenum:pagenum+1
        })
    }
}