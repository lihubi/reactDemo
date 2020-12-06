import axios from 'axios'
import {Toast} from "antd-mobile";

export default {
    async get(url,data){
        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
        });
        let res = await axios.get(url,data);
        Toast.hide();
        if(res.data.meta.status ==200){
            return res.data.message;
        }else{
            console.log("请求失败");
            return false;
        }
    }
}