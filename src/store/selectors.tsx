import { selector } from 'recoil';
import { authenticationData, userData } from './index';

export const authenticationState = selector({
  key: 'authenticationState',
  get: ({ get }) => {
    return get(authenticationData);
  },
});

export const userState = selector({
  key: 'userState',
  get: ({ get }) => {
    return get(userData);
  },
});
