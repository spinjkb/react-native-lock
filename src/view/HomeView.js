// 'use strict';

import React, {Component} from 'react';
import {TeaNavigator, Theme} from 'teaset';
import Home from './Home';
import us from '../mobx/userStorage'

Theme.set({fitIPhoneX: true});

export default class HomeView extends Component {
  
  render() {
    console.log(us.getKv('user'))
   
    
    return <TeaNavigator rootView={<Home />} />
    
  }
}
