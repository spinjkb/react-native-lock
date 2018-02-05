import React from 'react';
import {View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components'
import {BasePage, Input, Button,NavigationPage} from 'teaset';

import axios from 'axios'

export default class Register extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '注册',
    showBackButton: false,
  };

  constructor(props) {
    super(props);
    this.state={
      userName: null,
      password: null,
     
    }
  }
  register=()=>{
    let _this = this

    axios.get('http://localhost:3000/register',{
      params:{
        userName:this.state.userName,
        password:this.state.password
      }
    }).then(function(response){
    
      if(response.data.meta.code ===200){
        alert(response.data.data.message)
        _this.setState({userName:'',password:''})
      }
      console.log(response.data);
    })
    .catch(function(err){
      console.log(err);
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
        <Button title='注册' onPress={this.register}/>
      </View>
    );
  }

}