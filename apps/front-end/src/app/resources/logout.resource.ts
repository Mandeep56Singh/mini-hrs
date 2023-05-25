import { removeItem } from "./local-storage.resource";

export const logOut = ()=>{
    removeItem('access_token');
    removeItem('current_user');
};