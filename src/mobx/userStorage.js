import { observable, autorun, action } from "mobx";


class UserStore {
    constructor() {
        // this.runflag="runned"
    }
    
    @observable token ={
        user:''
    }
    @action setKv(key,value){
        this.token[key] = value
    }
    @action getKv(key){
        return this.token[key]
    }
    @action reset(key){
        this.token[key] = ''
    }
    // @action get22(item) {
    //     return this.announceDS[item]
    // }
    // @action setkv(key, value) {
    //     this.announceDS[key] = value;
    // }
}
const us = new UserStore()
export default us
