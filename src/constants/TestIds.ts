import { Platform } from 'react-native';

export default {
  ...Platform.select({
    default: {
      APP_OPEN: 'ca-app-pub-3940256099942544/3419835294',
      BANNER: 'ca-app-pub-3940256099942544/6300978111',
      INTERSTITIAL: 'ca-app-pub-3940256099942544/1033173712',
      INTERSTITIAL_VIDEO: 'ca-app-pub-3940256099942544/8691691433',
      REWARDED: 'ca-app-pub-3940256099942544/5224354917',
      REWARDED_INTERSTITIAL: 'ca-app-pub-3940256099942544/5354046379',
      NATIVE_ADVANCED: 'ca-app-pub-3940256099942544/2247696110',
      NATIVE_ADVANCED_VIDEO: 'ca-app-pub-3940256099942544/1044960115',
    },
    ios: {
      APP_OPEN: 'ca-app-pub-3940256099942544/5662855259',
      BANNER: 'ca-app-pub-3940256099942544/2934735716',
      INTERSTITIAL: 'ca-app-pub-3940256099942544/4411468910',
      INTERSTITIAL_VIDEO: 'ca-app-pub-3940256099942544/5135589807',
      REWARDED: 'ca-app-pub-3940256099942544/1712485313',
      REWARDED_INTERSTITIAL: 'ca-app-pub-3940256099942544/6978759866',
      NATIVE_ADVANCED: 'ca-app-pub-3940256099942544/3986624511',
      NATIVE_ADVANCED_VIDEO: 'ca-app-pub-3940256099942544/2521693316',
    },
  }),
};