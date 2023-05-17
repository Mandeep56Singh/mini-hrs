import { getApiUrl } from "../config/config.service";

function getBaseUrl(){
    return  getApiUrl() + `/patients`;
}

export async function getPatient(patientUuid: string){
    const url = getBaseUrl() + `/${patientUuid}`;
    const response = await fetch(url);
    return response.json();
}