import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';

import { NavigationPage, NavigationBar, Label, Carousel, PullPicker, ListRow, Toast, Theme, Button } from 'teaset';
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
        // this.leftViewItems = ['None', 'Back button', 'Link button', 'Icon button', 'Two icon button'];
        this.state = {
            width: Dimensions.get('window').width,
            control: 'default',
            roomid: '',
            loading: true,
            roomdetail: ''
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
                _this.setState({ loading: false, roomid: rs.getSelectRoomId(), roomdetail: response.data.data })
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
        console.log(this.state)
        // console.log(rs.getSelectRoomId())
        // console.log(rs.getSelectRoomTitle())
    }
   
    // renderNavigationBar() {
    //     // 重新渲染顶部。按钮需要重写
    //     return (
    //         <NavigationBar
    //             title={rs.getSelectRoomTitle()}
    //             showBackButton={true}
    //         />
    //     );
    // }
    renderNavigationTitle() {
        // 只重新渲染标题
        return (
            <View >
                <Label style={{ color: Theme.navTitleColor, fontSize: 17 }} text={rs.getSelectRoomTitle()} />
            </View>
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
                        {this.state.roomdetail.image.map((item, index) => {
                            return <Image key={index} style={{ width, height: 238 }} resizeMode='cover'
                                source={{ uri: item }} />
                        })}
                    </Carousel>
                    <View style={{ height: 20 }} />
                    <ListRow title='可容纳人数' detail={this.state.roomdetail.capacity + '人'} topSeparator='full' bottomSeparator='full' />
                    <ListRow title='价格' detail={this.state.roomdetail.price + '/小时'} topSeparator='full' bottomSeparator='full' />
                    <View style={{ height: 20 }} />
                    <ListRow title='click' detail={this.state.control} onPress={() => this.show()} topSeparator='full' bottomSeparator='full' />
                </ScrollView>
        );
    }

}