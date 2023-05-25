import { getApiUrl } from "../config/config.service";
import { customAxios } from "./http-requests/custom-axios";

function getBaseUrl(){
    return  getApiUrl() + `/patients/search`;
}

export async function patientSearch(searchString: string){
    const url = getBaseUrl() + `?identifier=${searchString}`;
    const resp = await customAxios.get(url);
    return resp.data;
}