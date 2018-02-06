import React , {Component}from 'react';
import { View ,Image} from 'react-native';
import { NavigationPage, Label, TabView ,BasePage,TeaNavigator} from 'teaset';

import Main from './Main'
import User from './User'
import Login from './Login'
import Room from './Room'
import Order from './Order'
export default class Home extends BasePage {

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
          title='首页'
          icon={require('../icons/home.png')}
          activeIcon={require('../icons/home_active.png')}
        >
          <Main />
        </TabView.Sheet>
        
        <TabView.Sheet
          title='订单'
          icon={require('../icons/home.png')}
          activeIcon={require('../icons/home_active.png')}
        >
          <Order />
        </TabView.Sheet>

        <TabView.Sheet
          title='用户'
          icon={require('../icons/me.png')}
          activeIcon={require('../icons/me_active.png')}
        >
          <User />
        </TabView.Sheet>
      </TabView>
    );
  }

}