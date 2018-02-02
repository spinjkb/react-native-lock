import React from 'react';
import { View, ScrollView } from 'react-native';

import { NavigationPage, Label, ListRow } from 'teaset';
import Login from './Login'
import Register from './Register'

export default class User extends NavigationPage {


  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'User',
    showBackButton: false,
  };
  Add = () => {



  }

  Delete = () => {
    alert('2222')
  }
  Search = () => {

  }
  Refresh = () => {
    alert('4444')
  }

  renderPage() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 30 }} />
        <ListRow title='登录' detail='' topSeparator='full' onPress={() => this.navigator.push({ view: <Login /> })} />
        <ListRow title='注册' detail='' topSeparator='none' bottomSeparator='full' onPress={() => this.navigator.push({ view: <Register /> })} />
        <View style={{ height: 20 }} />
        <ListRow title='设置' detail='' topSeparator='full' bottomSeparator='full'/>


        <View style={{ height: 50 }} />
        {1 ? null : <ListRow title='Theme' detail='退出登录' topSeparator='full' />}

      </ScrollView>
    );
  }

}