/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Login from "./src/components/Login/Login";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
      SplashScreen.hide();
  }

  render() {
    return (
      <Login />
    );
  }
}

export const primaryColorDark = '#388E3C';
export const primaryColor = '#4CAF50';
export const primaryColorLight = '#C8E6C9';
export const primaryColorText = '#FFFFFF';
export const accentColor = '#03A9F4';
export const primaryTextColor = '#212121';
export const secondaryTextColor = '#757575';
export const dividerColor = '#BDBDBD';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: primaryColorText,
  },
  instructions: {
    textAlign: 'center',
    color: primaryColorText,
    marginBottom: 5,
  },
});
