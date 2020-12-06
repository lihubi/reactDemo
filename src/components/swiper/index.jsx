import React,{Component} from 'react'
import SwipeableViews from "react-swipeable-views"
import "./style.scss"
const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: '#fff',
    },
    slide1: {
      background: '#FEA900',
    },
    slide2: {
      background: '#B3DC4A',
    },
    slide3: {
      background: '#6AC0FF',
    },
  };

export default class Swiper extends Component{
    render(){
        const banners = this.props.banners;
        const name = this.props.name;
        return(
            <div className="swiper">
                 <SwipeableViews >
                    {banners?banners.map((item,i)=>{
                        return(
                        <div className="swiper-items" key={i}>
                            <img src={item[name]} alt=""/>
                        </div>
                        )
                    }):''}
                </SwipeableViews>
            </div>
        )
    }
}