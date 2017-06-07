import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
  FB_LOGIN_SUCCESS,
  FB_LOGIN_FAIL,
} from './types';

const doFacebookLogion = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('445977732426856', {
    permissions: ['public_profile'],
  });

  if (type === 'cancel') {
    return dispatch({ type: FB_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  return dispatch({
    type: FB_LOGIN_SUCCESS,
    payload: token,
  });
};

export const facebookLogin = () => (async (dispatch) => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    dispatch({
      type: FB_LOGIN_SUCCESS,
      payload: token,
    });
  } else {
    doFacebookLogion(dispatch);
  }
});
