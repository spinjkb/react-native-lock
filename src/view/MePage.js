import React from 'react';
import {View} from 'react-native';

import {NavigationPage, Label} from 'teaset';

export default class MePage extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Me',
    showBackButton: true,
  };

  renderPage() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Label type='detail' size='xl' text={this.props.title} />
      </View>
    );
  }

}