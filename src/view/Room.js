import React from 'react';
import {View,ScrollView} from 'react-native';

import {NavigationPage, Label,ListRow} from 'teaset';

import OneRoom from './OneRoom'

export default class Room extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Room',
    showBackButton: false,
  };

  renderPage() {
    return (
        <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow title='房间1' detail='' topSeparator='full'  
        onPress={() => this.navigator.push({
             id:'detail',
             title:'Detail',
             view: <OneRoom /> ,
             params :{
                info:'哈哈哈',
              }
             })}/>
        <ListRow title='房间2' detail='' topSeparator='none' bottomSeparator='full' />



      </ScrollView>
    );
  }

}