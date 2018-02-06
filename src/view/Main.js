import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationPage, Label, ListRow, Toast, Theme, Button } from 'teaset';

import OneRoom from './OneRoom'
import axios from 'axios'
import rs from '../mobx/roomStorage'


export default class Main extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '房间列表',
    showBackButton: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: 'true',
      roomlist: []
    };
  }

  componentDidMount = () => {
    let _this = this
    this.showCustom()
    axios.post('http://localhost:3000/getAllRoom', {
      params: {
      }
    }).then(function (response) {
      if (response.data.meta.code === 200) {
        _this.hideCustom()
        _this.setState({ loading: false, roomlist: response.data.data.room })
        rs.setRoom(response.data.data.room)
      }
      console.log(rs.getRoom());
    })
      .catch(function (err) {
        console.log(err);
      });
  }
  static customKey = null;
  showCustom() {
    if (Main.customKey) return;
    Main.customKey = Toast.show({
      text: 'Toast custom',
      icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
      position: 'top',
      duration: 1000000,
    });
  }
  hideCustom() {
    if (!Main.customKey) return;
    Toast.hide(Main.customKey);
    Main.customKey = null;
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
            this.state.roomlist.map((item, index) => {
              return <ListRow
                key={index}
                title={item.title}
                detail=''
                topSeparator='full'
                bottomSeparator='full'
                onPress={() => {
                  // console.log(item.id)
                  rs.setSelectRoom(item.id)
                  this.navigator.push({
                    view: <OneRoom />
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