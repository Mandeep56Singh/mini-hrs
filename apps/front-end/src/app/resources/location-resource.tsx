import { getApiUrl } from "../config/config.service";

function getBaseUrl(){
    return  getApiUrl() + `/locations`;
}

export async function getLocations(){
    const url = getBaseUrl();
    const programs = await fetch(url);
    return programs.json();
}