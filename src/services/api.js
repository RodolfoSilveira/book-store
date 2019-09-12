import {create} from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';

const api = create({
  baseURL: 'http://10.0.2.2:3000',
});

api.addAsyncRequestTransform(async request => {
  const token = await AsyncStorage.getItem('@token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

export default api;
