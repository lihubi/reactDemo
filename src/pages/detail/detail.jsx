import React,{Component} from 'react'
import Request from '../../utils/api'
import Swiper from '../../components/swiper/index'
import PublicHeader from '../../components/publicHeader/index'


export default class Detail extends Component{
    constructor() {
        super();
        this.state = {
            id:'',
            info:{},
        }
    }
    render() {
        return(
            this.state.info?(
                <div className='detailbox'>
                    <PublicHeader title={this.state.info.goods_name}></PublicHeader>
                    <Swiper banners={this.state.info.pics} name="pics_mid"></Swiper>
                    <div>{this.state.info.goods_name}</div>
                    <div>{this.state.info.goods_price}</div>
                    <div dangerouslySetInnerHTML={{__html:this.state.info.goods_introduce}}></div>
                </div>
            ):'加载中'
        )
    }
    async componentDidMount() {
        let id = this.props.match.params.id;
        let info = await  Request.Details(id);
        this.setState({info})
        console.log(info);
    }
}