import React from 'react';
import { View, ScrollView } from 'react-native';

import { NavigationPage, Label, ListRow } from 'teaset';
import Login from './Login'
import App from '../../App'
import Register from './Register'
import Setting from './Setting'
import us from '../mobx/userStorage'
export default class User extends NavigationPage {


  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'User',
    showBackButton: false,
  };
 
  logout=()=>{
    alert('退出成功')
    us.reset('user')
    this.navigator.push({view: <App />})
  }
  renderPage() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 30 }} />
        
        
        <ListRow title='设置' detail='' topSeparator='full' bottomSeparator='full' onPress={()=>this.navigator.push({view: <Setting />})}/>


        <View style={{ height: 20 }} />
        <ListRow title='退出登录' detail='退出登录' topSeparator='full' onPress={this.logout}/>
        

      </ScrollView>
    );
  }

}