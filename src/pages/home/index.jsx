import React,{Component} from 'react'
import FootNav from "../../components/footNav"
import Request from "../../utils/api"
import { connect } from 'react-redux'

import Swiper from "../../components/swiper"
import HomeHeader from "./homeHeader"
import HomeBar from "./homeBar"
import ListBox from "../../components/listbox/listbox"


 class Home extends Component{
    constructor(){
        super();
        this.state = {
            Swipers:[],
            List:[]
        }
    }
    render(){
        return(
            <div ref="onPullUp">
                <HomeHeader city={this.props.city.cityName}></HomeHeader>
                <Swiper banners={this.state.Swipers} name="image_src"></Swiper>
                <HomeBar></HomeBar>
                 <div className="listbox" style={{marginTop:'10px',marginBottom:'50px'}}>
                                    {
                                        this.state.List.map((item, i) => {
                                            return (
                                                <ListBox key={i} item={item}></ListBox>
                                            )
                                        })
                                    }
                                </div>
                <FootNav></FootNav>
            </div>
        )
    }
    async componentDidMount(){
        //获取轮播图
        let Swipers = await Request.HomeSwipers();
        console.log(Swipers)
        this.setState({Swipers})

         //获取商品数据
         let List = await Request.search();
         this.setState({
             List: List.goods
         })

        //触底
        window.addEventListener("scroll",this.handle)
    }

      componentWillUnmount(){
        // 组件将要卸载，取消监听window滚动事件
        window.removeEventListener('scroll', this.handle);

      }

    handle = ()=>{
         let onPullUpHeight=this.refs.onPullUp.clientHeight; //数据的高
         let documentHeight=document.documentElement.clientHeight; //屏幕的高
         let documentTop=document.documentElement.scrollTop;  //滚动的高
         if(onPullUpHeight>documentHeight&&Math.floor(onPullUpHeight)===Math.floor(documentHeight+documentTop-50)){
            console.log('到底')
         }
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