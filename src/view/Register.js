import React from 'react';
import { View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import { BasePage, Input, Button, NavigationPage } from 'teaset';

import axios from 'axios'

export default class Register extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '注册',
    showBackButton: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile: null,
      username:'',
      password: null,
      code: null,
      transactionid:this.randomString(20),
      autoCorrect:false
    }
  }
  register = () => {
    if (!this.checkMobile(this.state.mobile)) {
      alert('请检查手机号')
      return
    }
    if (this.state.username==='') {
      alert('请输入用户名')
      return
    }
    let _this = this
    var qs = require('qs')
    var form = {
      mobile: this.state.mobile,
      transactionid: this.state.transactionid,
      code:this.state.code,
      first_name:this.state.username,
      password:this.state.password

    }
    axios.post('http://47.92.72.19:9000/meetuser/checkAndRegister', qs.stringify(form)).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  }
  send = () => {
    if (!this.checkMobile(this.state.mobile)) {
      alert('请检查手机号')
      return
    }
    let _this = this
    
    var qs = require('qs')
    var form = {
      mobile:this.state.mobile,
      action_type:'register',
      transactionid:this.state.transactionid
    }
    axios.post('http://47.92.72.19:9000/meetuser/send_sms',qs.stringify(form)).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })
  }
  //生成随机数
  randomString(len) {
    len = len || 32;
    　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    　　var maxPos = $chars.length;
    　　var pwd = '';
    　　for (i = 0; i < len; i++) {
      　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return pwd;
  }
  checkMobile(str) {
    re = /^1\d{10}$/
    if (re.test(str)) {
      
      return true
    } else {
      
      return false
    }
  }
  renderPage() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Input
          style={{ width: 200 }}
          size='sm'
          value={this.state.mobile}
          placeholder='手机号'
          onChangeText={text => this.setState({ mobile: text })}
        />
        <Input
          style={{ width: 200 }}
          size='sm'
          value={this.state.username}
          autoCapitalize="none"
          autoCorrect={this.state.autoCorrect}
          placeholder='用户名'
          onChangeText={text => this.setState({ username: text })}
        />
        <Input
          style={{ width: 200 }}
          size='sm'
          value={this.state.password}
          placeholder='密码'
          autoCapitalize="none"
          autoCorrect={this.state.autoCorrect}
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
        />
        <Input
          style={{ width: 200 }}
          size='sm'
          
          placeholder='验证码'
          onChangeText={text => this.setState({ code: text })}
        />
        <Input
          style={{ width: 200,display: 'none', }}
          size='sm'
          value={this.state.transactionid}
        />
        <Button title='发送验证码' onPress={this.send}/>
        <Button title='注册' onPress={this.register} />
      </View>
    );
  }

}