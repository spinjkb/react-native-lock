import { toJS,observable, autorun, action } from "mobx";


class OrderStore {
    constructor() {
        // this.runflag="runned"
    }
    
    @observable order = []
    @observable selectOrder={
        orderid:''
    }
    @action getOrder(){
        return toJS(this.order.slice())
    }
    @action setOrder(value){
        this.order=value
    }
    @action getSelectOrderId(){
        return this.selectOrder.orderid
    }
    // @action getSelectRoomTitle(){
    //     return this.selectRoom.roomtitle
    // }
    @action setSelectOrder(id){
        this.selectOrder.orderid=id
    }
    // @action setKv(key,value){
    //     this.token[key] = value
    // }
    // @action getKv(key){
    //     return this.token[key]
    // }
    // @action reset(key){
    //     this.token[key] = ''
    // }
    
}
const os = new OrderStore()
export default os
