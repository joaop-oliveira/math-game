/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import RootStack from './src/Screen/Home/index';
import SignInScreen from './src/Screen/SignIn';
import SignUpScreen from './src/Screen/SignUp';
import AuthLoadingScreen from './src/Screen/AuthLoading';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

let userToken = '';

const AppStack = createStackNavigator(
  { Root: RootStack },
  {
    initialRouteName: 'Root',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2889ee'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
const AuthStack = createStackNavigator({ SignIn: SignInScreen, SignUp: SignUpScreen });

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default class App extends Component {
  // async componentDidMount() {
  //   userToken = await AsyncStorage.getItem('userToken');
  // }
  // async componentDidUpdate() {
  //   userToken = await AsyncStorage.getItem('userToken');
  // }

  render() {
    return <SwitchNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
