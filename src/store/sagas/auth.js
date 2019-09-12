import {call, put} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {Creators as AuthCreators, Types} from '../ducks/auth';
import api from '../../services/api';
import NavigationService from '../../NavigationService';

export function* authorize({payload: {email, password}}) {
  try {
    const response = yield call(api.post, '/login', {email, password});

    const {data} = response;

    yield put(AuthCreators.onSuccess(data));

    yield call(
      AsyncStorage.multiSet,
      [['@token', data.token.token], ['@user', JSON.stringify(data.user)]],
      error => console.tron.log(error),
    );

    yield call([NavigationService, 'navigate'], 'Store');
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

    yield put({type: Types.AUTH_ERROR, payload: message});
    AsyncStorage.removeItem('@token');
    console.tron.log(error);
  }
}
