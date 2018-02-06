import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';

import { NavigationPage,NavigationBar, Label, Carousel, PullPicker, ListRow, Toast, Theme, Button } from 'teaset';
import axios from 'axios'
import rs from '../mobx/roomStorage'
export default class OneRoom extends NavigationPage {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: '房间信息',
        showBackButton: true,
    };
    constructor(props) {
        super(props)
        // this.items = ['none', 'default', 'custom'];
        this.state = {
            width: Dimensions.get('window').width,
            control: 'default',
            roomid: '',
            loading: true,
            roomdetail:''
        }
    }
    componentDidMount() {
        // this.setState({ roomid: rs.getSelectRoomId() })
        this.showCustom()
        let _this = this
        axios.get('http://localhost:3000/getOneRoom', {
            params: {
                roomid: rs.getSelectRoomId()
            }
        }).then(function (response) {
            if (response.data.meta.code === 200) {
                _this.hideCustom()
                _this.setState({ loading: false, roomid: rs.getSelectRoomId() ,roomdetail:response.data.data.message})
                // rs.setRoom(response.data.data.room)
                console.log(response.data)
            }
            // console.log(rs.getRoom());
        }).catch(function (err) {
            console.log(err);
        });
    }
    showCustom() {
        if (OneRoom.customKey) return;
        OneRoom.customKey = Toast.show({
            text: 'Toast custom',
            icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
            position: 'top',
            duration: 1000000,
        });
    }
    hideCustom() {
        if (!OneRoom.customKey) return;
        Toast.hide(OneRoom.customKey);
        OneRoom.customKey = null;
    }

    show = () => {
        // console.log(this.state)
        // console.log(rs.getSelectRoomId())
        // console.log(rs.getSelectRoomTitle())
        this.props.title=rs.getSelectRoomTitle()
        
        console.log(this)
    }
    renderNavigationBar() {
        // 重新渲染标题
        return (
          <NavigationBar
            title={rs.getSelectRoomTitle()}
            />
        );
      }
    renderPage() {
        // console.log(rs.getSelectRoomId())
        let { width } = this.state;
        return (
            this.state.loading
                ? <View style={{ height: 20 }} />
                :
                <ScrollView style={{ flex: 1 }}>
                    <Carousel
                        style={{ height: 238 }}
                        control={true}
                        onLayout={e => this.setState({ width: e.nativeEvent.layout.width })}
                    >
                        <Image style={{ width, height: 238 }} resizeMode='cover' source={require('../images/teaset1.jpg')} />
                        <Image style={{ width, height: 238 }} resizeMode='cover' source={require('../images/teaset2.jpg')} />
                        <Image style={{ width, height: 238 }} resizeMode='cover' source={require('../images/teaset3.jpg')} />
                    </Carousel>
                    <View style={{ height: 20 }} />
                    <ListRow title='click' detail={this.state.control} onPress={() => this.show()} topSeparator='full' bottomSeparator='full' />
                </ScrollView>
        );
    }

}