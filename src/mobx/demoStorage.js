import { observable, autorun, action } from "mobx";


class DemoStore {
    constructor() {
        // this.runflag="runned"
    }
    //   orderno:'',
    //   // 发货地点
    //   src_id:'',
    //   src_text:'',
    //   // 收货地点
    //   descloc:'',
    //   dest_text:'',
    // // 货品名称
    //   goods_id:'',
    //   goods_text:'',
    // //单价
    //   price:'',
    // //发车时间
    //   cttime=null;
    // //联系电话
    //   contact_mobile:'',
    // //需要车型
    //   cartype_id:'',
    //   cartype_text:'',
    // //需要车辆数
    //   cars_need=0
    // @observable announceDS = {
    //     orderno: '',
    //     src_id: '',
    //     src_text: '',
    //     descloc: '',
    //     dest_text: '',
    //     goods_id: '',
    //     goods_text: '',
    //     price: '',
    //     cttime: null,
    //     contact_mobile: '',
    //     cartype_id: '',
    //     cartype_text: '',
    //     cars_need: 0
    // }
    @observable token ={
        user:''
    }
    @action setKv(key,value){
        this.token[key] = value
    }

    @action get22(item) {
        return this.announceDS[item]
    }
    @action setkv(key, value) {
        this.announceDS[key] = value;
    }
}
const ds = new DemoStore()
export default ds
