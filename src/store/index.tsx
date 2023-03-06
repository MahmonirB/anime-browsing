import { atom } from "recoil";

export const authenticationData = atom({
    key: 'authenticationData',
    default: '',
});

export const userData = atom({
    key: 'userData',
    default: {
        name: '',
        id: ''
    },
});
