import React from 'react';
import {View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import {BasePage, Input, Button,NavigationPage} from 'teaset';

export default class Register extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Register',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    Object.assign(this.state, {
      userName: null,
      password: null,
    });
  }

  renderPage() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Input
          style={{width: 200}}
          size='sm'
          value={this.state.userName}
          placeholder='用户名'
          onChangeText={text => this.setState({userName: text})}
          />
        <Input
          style={{width: 200}}
          size='sm'
          value={this.state.password}
          placeholder='密码'
          secureTextEntry={true}
          onChangeText={text => this.setState({password: text})}
          />
        <Button title='注册' onPress={()=>{alert('11111')}}/>
      </View>
    );
  }

}