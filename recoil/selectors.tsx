import { selector } from "recoil";
import { authenticationData } from "./index";


const authenticationState = selector({
    key: 'authenticationState',
    get: ({ get }) => {
        return get(authenticationData);
    }
});

export { authenticationState };
