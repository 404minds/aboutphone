/**
 * about-phone
 * https://github.com/404minds/device-info
 * @flow
 */

import React from 'react';
import AppContainer from './app/containers/AppContainer';

import {
  AppRegistry,
} from 'react-native';

const App = () => (
  <AppContainer />
)

AppRegistry.registerComponent('aboutphone', () => App);
