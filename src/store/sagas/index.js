import {all, takeLatest} from 'redux-saga/effects';
import {Types as AuthTypes} from '../ducks/auth';
import {Types as RegisterTypes} from '../ducks/register';
import {authorize} from './auth';
import {register} from './register';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, authorize),
    takeLatest(RegisterTypes.REGISTER_REQUEST, register),
  ]);
}
