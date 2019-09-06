import {call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {Creators as RegisterCreators, Types} from '../ducks/register';
import api from '../../services/api';
import NavigationService from '../../NavigationService';

export function* register({payload: {formData}}) {
  try {
    const response = yield call(api.post, '/register', formData);

    const {data} = response;

    yield put(RegisterCreators.onSuccess(data));

    AsyncStorage.multiSet([['@token', data.token], ['@user', data.user]]);

    NavigationService.navigate('Store');
  } catch (error) {
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      default:
        message = 'Something went wrong';
    }

    yield put({type: Types.REGISTER_ERROR, payload: message});
    AsyncStorage.removeItem('@token');
  }
}
