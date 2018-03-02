import React from 'react';
import { View, Text } from 'react-native';
// import { Navigator } from 'react-native-deprecated-custom-components'
import { BasePage, Input, Button, NavigationPage, TeaNavigator } from 'teaset';
import RNRestart from 'react-native-restart';
import axios from 'axios'
import Home from './Home'
import HomeView from './HomeView'
import us from '../mobx/userStorage'



export default class Login extends NavigationPage {

  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: '登录',
    showBackButton: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: '',
      autoCorrect:false
    }
  }

  login = () => {
    
    if (this.state.userName==='') {
      alert('请输入用户名')
      return
    }
    let _this = this
    var qs = require('qs')
    var form = {
      mobile: this.state.mobile,
      password:this.state.password,
      login_type:'mobile'
    }
    axios.post('http://47.92.72.19:9000/meetuser/loginReact', qs.stringify(form)).then(function (response) {
      console.log(response)
      // _this.navigator.push({ view: <HomeView /> })
    }).catch(function (error) {
      console.log(error)
    })




    // let _this = this
    // if (this.state.userName === '' || this.state.password === '') {
    //   alert('请输入用户名或密码')
    // } else {
    //   axios.get('http://localhost:3000/login', {
    //     params: {
    //       userName: this.state.userName,
    //       password: this.state.password
    //     }
    //   }).then(function (response) {
    //     // alert(JSON.parse(response))
    //     if (response.data.meta.code === 200) {
    //       // alert(response.data.data.message)
    //       us.setKv('user', response.data.user.username)
    //       // _this.setState({'reload':'true'})
    //       console.info(_this.navigator)
    //       _this.navigator.push({ view: <HomeView /> })
    //     } else {
    //       alert(response.data.data.message)
    //     }
    //     console.log(us.token.user)
    //     console.log(response.data);
    //     // console.log(this.props.navigator);

    //   })
    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // }



  }
  renderPage() {
    // autoCapitalize = "none"大小写
    // autoCorrect = 'false'纠正
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Input
          autoCapitalize="none"
          autoCorrect={this.state.autoCorrect}
          style={{ width: 200 }}
          size='sm'
          value={this.state.mobile}
          placeholder='用户名'
          onChangeText={text => this.setState({ mobile: text })}
        />
        <Input
          autoCapitalize="none"
          autoCorrect={this.state.autoCorrect}
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
