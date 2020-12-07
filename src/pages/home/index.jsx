import React,{Component} from 'react'
import FootNav from "../../components/footNav"
import Request from "../../utils/api"
import { connect } from 'react-redux'

import Swiper from "../../components/swiper"
import HomeHeader from "./homeHeader"
import HomeBar from "./homeBar"
import Listcontain from '../../components/listbox/listcontain'

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
                <div style={{marginBottom:'56px'}}>
                    <Listcontain isSearch={true} onRef={this.onRef}/>
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

        //触底
        window.addEventListener("scroll",this.handle)
    }

      componentWillUnmount(){
        // 组件将要卸载，取消监听window滚动事件
        window.removeEventListener('scroll', this.handle);

      }
       onRef = (ref) => {
           this.child = ref
       }

    handle = ()=>{
         let onPullUpHeight=this.refs.onPullUp.clientHeight; //数据的高
         let documentHeight=document.documentElement.clientHeight; //屏幕的高
         let documentTop=document.documentElement.scrollTop;  //滚动的高
         let isbtm = Math.floor(onPullUpHeight-(documentHeight+documentTop-56))<=0;
         if(onPullUpHeight>documentHeight&&isbtm){
            //滚动到底部，再次加载
            console.log('加载')
            this.child.getmsg();
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