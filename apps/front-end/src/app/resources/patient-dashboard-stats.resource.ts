import { getApiUrl } from "../config/config.service";
import { PatientDashboardStats } from '../models/patient-dashboard-stats';

function getBaseUrl(){
    return  getApiUrl() + `/patient-statistics`;
}

export async function getPatientStats(patientUuid: string): Promise<PatientDashboardStats>{
    const url = getBaseUrl() + `/${patientUuid}`;
    const response = await fetch(url);
    return response.json();
}