import { getApiUrl } from "../config/config.service";

function getBaseUrl(){
    return  getApiUrl() + `/programs`;
}

export async function getPrograms(){
    const url = getBaseUrl();
    const programs = await fetch(url);
    return programs.json();
}