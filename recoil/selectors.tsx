import { selector } from "recoil";
import { authenticationData } from "./index";


export const authenticationState = selector({
    key: 'authenticationState',
    get: ({ get }) => {
        return get(authenticationData);
    }
});
