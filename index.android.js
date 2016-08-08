import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';
import Login from './app/Login';
import Register from './app/Register';
import ForgotPassword from './app/ForgotPassword';
import UserInfo from './app/UserInfo';
import ReviewRating from './app/ReviewRating';

class KisanRaja extends Component {
  render() {
    return (
      <Navigator
      initialRoute = {{
        id:'ReviewRating'
      }} 
      renderScene={
        this.navigatorRenderScene
      }
      />
    );
  }
  navigatorRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'Login':
        return(<Login navigator={navigator} title="Login"/>);
      case 'Register':
        return(<Register navigator={navigator} title="Register"/>);
      case 'ForgotPassword':
        return(<ForgotPassword navigator={navigator} title="Forgot Password"/>);
      case 'UserInfo':
        return(<UserInfo navigator={navigator} title="User Info"/>);
      case 'ReviewRating':
        return(<ReviewRating navigator={navigator} title="Review & Rating"/>);                        
    }
  }
}

AppRegistry.registerComponent('KisanRaja', () => KisanRaja);
