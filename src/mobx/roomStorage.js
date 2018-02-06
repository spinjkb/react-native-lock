import { toJS,observable, autorun, action } from "mobx";


class RoomStore {
    constructor() {
        // this.runflag="runned"
    }
    
    @observable room = []
    @observable selectRoom={
        roomid:'',
        roomtitle:''
    }
    @action getRoom(){
        return toJS(this.room.slice())
    }
    @action setRoom(value){
        this.room=value
    }
    @action getSelectRoomId(){
        return this.selectRoom.roomid
    }
    @action getSelectRoomTitle(){
        return this.selectRoom.roomtitle
    }
    @action setSelectRoom(id,title){
        this.selectRoom.roomid=id
        this.selectRoom.roomtitle=title
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
