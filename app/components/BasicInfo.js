import React, { Component } from 'react';
import RNDeviceInfo from 'react-native-device-info';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
} from 'react-native';

class BasicInfo extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.label}>
            {
              Platform.OS === 'ios' ?
              'UDID' :
              'UUID'
            }
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getUniqueID()}
          </Text>

          {
            Platform.OS !== 'ios' ?
            (
              <View>
                <Text style={styles.label}>
                  IMEI
                </Text>
                <Text style={styles.value}>
                  Unknown
                </Text>
              </View>
            ) :
            undefined
          }

          <Text style={styles.label}>
            Device Name
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getDeviceName()}
          </Text>

          <Text style={styles.label}>
            Manufacturer
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getManufacturer()}
          </Text>

          <Text style={styles.label}>
            Brand
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getBrand()}
          </Text>

          <Text style={styles.label}>
            Model
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getModel()}
          </Text>

          <Text style={styles.label}>
            Device ID
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getDeviceId()}
          </Text>

          <Text style={styles.label}>
            System Name
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getSystemName()}
          </Text>

          <Text style={styles.label}>
            System Version
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getSystemVersion()}
          </Text>

          <Text style={styles.label}>
            User Agent
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getUserAgent()}
          </Text>

          <Text style={styles.label}>
            Country
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getDeviceCountry()}
          </Text>

          <Text style={styles.label}>
            Timezone
          </Text>
          <Text style={styles.value}>
            {RNDeviceInfo.getTimezone()}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginBottom: 10,
  },
});

export default BasicInfo;
