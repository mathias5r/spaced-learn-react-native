import AsyncStorage from '@react-native-community/async-storage';
import logger from './logger';

export const saveItem = async ({ key, value }) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    logger(`Error trying to save item to AsyncStorage: `, e);
  }
};

export const getItem = async ({ key }) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    logger(`Error trying to get item from AsyncStorage: `, e);
  }
  return null;
};

export const removeItem = async ({ key }) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    logger(`Error trying to get item from AsyncStorage: `, e);
  }
};
