import React from 'react';
import { AdMobInterstitial, AdMobBanner } from 'react-native-admob';

export default function Ads() {
  return (
    <AdMobBanner
      bannerSize="smartBannerPortrait"
      testDeviceID="EMULATOR"
      adUnitID="ca-app-pub-7943491314139974/1848874045"
    />
  );
}
