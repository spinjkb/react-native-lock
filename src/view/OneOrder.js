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
        this.state = {
            width: Dimensions.get('window').width,
            control: 'default',
            orderid: '',
            loading: true,
            orderdetail: ''
        }
    }
    componentDidMount() {
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
                console.log(response.data)
            }
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

    renderPage() {
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
                </ScrollView>
        );
    }

}