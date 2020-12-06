import ajax from './ajax'
import base from "./base"
export default {
    //首页轮播图
    async HomeSwipers(){
        let res = await ajax.get(base.HomeSwipers);
        return res;
    },
    //首页导航菜单
    async catItems(){
        let res = await ajax.get(base.catItems);
        return res;
    },
    //搜索页面搜索
    async search(query){
        let res = await ajax.get(base.Search,{params:{query}});
        return res;
    },
    //详情页面
    async Details(goods_id){
        let res = await ajax.get(base.Details,{params:{goods_id}});
        return res;
    }
}