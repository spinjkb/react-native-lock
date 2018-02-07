import React from 'react';
import { View, Text, ScrollView, Image, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';

import { NavigationPage, NavigationBar, Label, Carousel, PullPicker, ListRow, Toast, Theme, Button } from 'teaset';
import axios from 'axios'
import os from '../mobx/orderStorage'
export default class OneOrder extends NavigationPage {

    static defaultProps = {
        ...NavigationPage.defaultProps,
        title: '订单详情',
        showBackButton: true,
    };
    constructor(props) {
        super(props)
        // this.items = ['none', 'default', 'custom'];
        // this.leftViewItems = ['None', 'Back button', 'Link button', 'Icon button', 'Two icon button'];
        this.state = {
            width: Dimensions.get('window').width,
            control: 'default',
            orderid: '',
            loading: true,
            orderdetail: ''
        }
    }
    componentDidMount() {
        // this.setState({ roomid: rs.getSelectRoomId() })
        this.showCustom()
        let _this = this
        axios.get('http://localhost:3000/getOneOrder', {
            params: {
                orderid: os.getSelectOrderId()
            }
        }).then(function (response) {
            if (response.data.meta.code === 200) {
                _this.hideCustom()
                _this.setState({ loading: false, orderid: os.getSelectOrderId(), orderdetail: response.data.data })
                // rs.setRoom(response.data.data.room)
                console.log(response.data)
            }
            // console.log(rs.getRoom());
        }).catch(function (err) {
            console.log(err);
        });
    }
    showCustom() {
        if (OneOrder.customKey) return;
        OneOrder.customKey = Toast.show({
            text: 'Toast custom',
            icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
            position: 'top',
            duration: 1000000,
        });
    }
    hideCustom() {
        if (!OneOrder.customKey) return;
        Toast.hide(OneOrder.customKey);
        OneOrder.customKey = null;
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
    // renderNavigationTitle() {
    //     // 只重新渲染标题
    //     return (
    //         <View >
    //             <Label style={{ color: Theme.navTitleColor, fontSize: 17 }} text={rs.getSelectRoomTitle()} />
    //         </View>
    //     );
    // }
    renderPage() {
        // console.log(rs.getSelectRoomId())
        let { width } = this.state;
        return (
            this.state.loading
                ? <View style={{ height: 20 }} />
                :
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ height: 20 }} />

                    <ListRow title='房间' detail={this.state.orderdetail.message}  topSeparator='full' bottomSeparator='full' />
                    <ListRow title='日期' detail={this.state.orderdetail.date}  topSeparator='full' bottomSeparator='full' />
                    <ListRow title='开始时间' detail={this.state.orderdetail.starttime}  topSeparator='full' bottomSeparator='full' />
                    <ListRow title='结束时间' detail={this.state.orderdetail.endtime}  topSeparator='full' bottomSeparator='full' />
                    <View style={{ height: 20 }} />
                    <ListRow title='开锁密码' detail={this.state.orderdetail.password}  topSeparator='full' bottomSeparator='full' />



                    <View style={{ height: 20 }} />
                    {/* <ListRow title='click' detail={this.state.control} onPress={() => this.show()} topSeparator='full' bottomSeparator='full' /> */}
                </ScrollView>
        );
    }

}