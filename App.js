'use strict';

import React, {Component} from 'react';

import {TeaNavigator, Theme} from 'teaset';
import Home from './src/view/Home';

Theme.set({fitIPhoneX: true});

export default class App extends Component {
  render() {
    return <TeaNavigator rootView={<Home />} />;
  }
}