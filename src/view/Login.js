import React from 'react';
import { View } from 'react-native';
// import { Navigator } from 'react-native-deprecated-custom-components'
import { BasePage, Input, Button, NavigationPage } from 'teaset';
import axios from 'axios'
import Home from './Home'
import ds from '../mobx/demoStorage'

let _this = this

export default class Login extends NavigationPage {
  
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Login',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    Object.assign(this.state, {
      userName: null,
      password: null,
    });
  }
  login = () => {
    // alert(this.state.userName + this.state.password)
    axios.get('http://localhost:3000/login',{
      params:{
        userName:this.state.userName,
        password:this.state.password
      }
    }).then(function(response){
      // alert(JSON.parse(response))
      if(response.data.meta.code ===200){
        alert(response.data.data.message)
        
        ds.setKv('user',response.data.user.username)
        this.navigator.push({view: <Home />})
      }
      console.log(ds.token.user)
      console.log(response.data);
      console.log(this.props.navigator);

    })
    .catch(function(err){
      console.log(err);
    });


  }
  renderPage() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Input
          style={{ width: 200 }}
          size='sm'
          value={this.state.userName}
          placeholder='用户名'
          onChangeText={text => this.setState({ userName: text })}
        />
        <Input
          style={{ width: 200 }}
          size='sm'
          value={this.state.password}
          placeholder='密码'
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button title='登录' onPress={this.login} />
      </View>
    );
  }

}