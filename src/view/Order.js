import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationPage, Label, ListRow, Toast, Theme, Button } from 'teaset';

import OneOrder from './OneOrder'
import axios from 'axios'
import os from '../mobx/orderStorage'


export default class Order extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '订单',
    showBackButton: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: 'true',
      orderlist: []
    };
  }

  componentDidMount = () => {
    let _this = this
    this.showCustom()
    axios.post('http://localhost:3000/getAllOrder', {
      params: {
      }
    }).then(function (response) {
      if (response.data.meta.code === 200) {
        _this.hideCustom()
        _this.setState({ loading: false, orderlist: response.data.data.order })
        os.setOrder(response.data.data.order)
      }
      console.log(os.getOrder());
    })
      .catch(function (err) {
        console.log(err);
      });
  }
  static customKey = null;
  showCustom() {
    if (Order.customKey) return;
    Order.customKey = Toast.show({
      text: 'Toast custom',
      icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
      position: 'top',
      duration: 1000000,
    });
  }
  hideCustom() {
    if (!Order.customKey) return;
    Toast.hide(Order.customKey);
    Order.customKey = null;
  }
  showrs = () => {

    console.info(this.navigator)
  }
  renderPage() {

    return (
      this.state.loading
        ? <View style={{ height: 20 }} />
        : <ScrollView style={{ flex: 1 }}>
          <View style={{ height: 20 }} />
          {
            this.state.orderlist.map((item, index) => {
              return <ListRow
                key={index}
                title={item.title}
                detail=''
                topSeparator='full'
                bottomSeparator='full'
                onPress={() => {
                  // console.log(item.id)
                  os.setSelectOrder(item.id)
                  this.navigator.push({
                    view: <OneOrder />
                  })
                }} />
            })}
          <View style={{ height: 20 }} />
          {/* <ListRow title='Show custom' onPress={() => this.showCustom()} topSeparator='full' />
          <ListRow title='Hide custom' onPress={() => this.hideCustom()} bottomSeparator='full' />
          <Button title='aa' onPress={() => this.showrs()}></Button> */}
        </ScrollView>

    )
  }
}