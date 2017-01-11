import React, { Component } from 'react';
import BasicInfo from './../components/BasicInfo';
import Ads from './../components/Ads';

import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

export default class AppContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>About Phone</Text>
        <BasicInfo />
        <Ads />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios' ? 40 : 20),
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: 24,
    marginBottom: 15,
  },
});
