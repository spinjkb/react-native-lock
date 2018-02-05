import React , {Component}from 'react';
import { View ,Image} from 'react-native';
import { NavigationPage, Label, TabView ,BasePage,TeaNavigator} from 'teaset';


import Login from './Login'
import Register from './Register'

export default class LoginOrRegister extends BasePage {

  static defaultProps = {
    ...BasePage.defaultProps,
    scene: TeaNavigator.SceneConfigs.PushFromRight,
    hidden:true,
    title:'hhhh'
  };
  

  renderPage() {
      
    return (
      <TabView style={{ flex: 1 }} type='projector'>
        <TabView.Sheet
          title='登录'
          icon={require('../icons/home.png')}
          activeIcon={require('../icons/home_active.png')}
        >
          <Login />
        </TabView.Sheet>
        
        <TabView.Sheet
          title='注册'
          icon={require('../icons/home.png')}
          activeIcon={require('../icons/home_active.png')}
        >
          <Register />
        </TabView.Sheet>

       
      </TabView>
    );
  }

}