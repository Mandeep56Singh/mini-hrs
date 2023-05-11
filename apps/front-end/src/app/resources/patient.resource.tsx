export async function getPatient(patientUuid: string){
    const url = `http://localhost:3000/api/patients/${patientUuid}`;
    const response = await fetch(url);
    return response.json();
}