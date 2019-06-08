import { Dimensions, Platform } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get(`window`).width;
export const SCREEN_HEIGHT = Dimensions.get(`window`).height;

export const GRADIENTS = [
  {
    colors: [`#8a2387`, `#e94057`, `#f27121`],
  },
  {
    colors: [`#43cea2`, `#185a9d`],
  },
  {
    colors: [`#ffb347`, `#ffcc33`],
  },
  {
    colors: [`#52c234`, `#061700`],
  },
];

export const ENDPOINTS = {
  GRAPHQL: `http://localhost:8000/graphql`,
};

export const isProduction = !__DEV__;

export const IS_IOS = Platform.OS === `ios`;
export const IS_ANDROID = Platform.OS === `android`;
