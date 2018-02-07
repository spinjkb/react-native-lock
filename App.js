// 'use strict';

import React, {Component} from 'react';

import {TeaNavigator, Theme} from 'teaset';
import Home from './src/view/Home';
import LoginOrRegister from './src/view/LoginOrRegister'
import us from './src/mobx/userStorage'

Theme.set({fitIPhoneX: true});

export default class App extends Component {
  
  render() {
    console.log(us.getKv('user'))
   
    // return <TeaNavigator rootView={<Home />} />
    return <TeaNavigator rootView={<LoginOrRegister />} />
    
  }
}
// function HomeView() {
//   if (us.getKv('user')=='') {
//     return <TeaNavigator rootView={<Home />} />
//   }else if(us.getKv('user')!==''){
//     return <TeaNavigator rootView={<LoginOrRegister />} />
//   }
  
// }