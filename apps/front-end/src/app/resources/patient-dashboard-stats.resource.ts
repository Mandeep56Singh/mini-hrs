import { getApiUrl } from "../config/config.service";
import { PatientDashboardStats } from '../models/patient-dashboard-stats';
import { customAxios } from "./http-requests/custom-axios";

function getBaseUrl(){
    return  getApiUrl() + `/patient-statistics`;
}

export async function getPatientStats(patientUuid: string): Promise<PatientDashboardStats>{
    const url = getBaseUrl() + `/${patientUuid}`;
    const resp = await customAxios.get(url);
    return resp.data;
}