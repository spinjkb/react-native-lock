import { toJS,observable, autorun, action } from "mobx";


class RoomStore {
    constructor() {
        // this.runflag="runned"
    }
    
    @observable room = []
    @observable selectRoom={
        room:''
    }
    @action getRoom(){
        return toJS(this.room.slice())
    }
    @action setRoom(value){
        this.room=value
    }
    @action getSelectRoom(){
        return this.selectRoom.room
    }
    @action setSelectRoom(value){
        this.selectRoom.room=value
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
const rs = new RoomStore()
export default rs
