import React from 'react';
import {View,ScrollView} from 'react-native';

import {NavigationPage, Label,ListRow} from 'teaset';


export default class Order extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '订单',
    showBackButton: false,
  };

  renderPage() {
    return (
        <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow title='房间1' detail='' topSeparator='full'/>
        <ListRow title='房间2' detail='' topSeparator='none' bottomSeparator='full' />



      </ScrollView>
    );
  }

}