import axios from 'axios'
import base from "./base"

export default {
    //首页轮播图
    async HomeSwipers(){
        let res = await axios.get(base.HomeSwipers);
        if(res.data.meta.status==200){
            return res.data.message;
        }else{
            console.log("请求失败");
            return false;
        }
    },
    //首页导航菜单
    async catItems(){
        let res = await axios.get(base.catItems);
        if(res.data.meta.status==200){
            return res.data.message;
        }else{
            console.log("请求失败");
            return false;
        }
    }
}