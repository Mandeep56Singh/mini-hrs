import { getApiUrl } from "../config/config.service";

function getBaseUrl(){
    return  getApiUrl() + `/patients/search`;
}

export async function patientSearch(searchString: string){
    const url = getBaseUrl() + `?identifier=${searchString}`;
    const response = await fetch(url);
    return response.json();
}