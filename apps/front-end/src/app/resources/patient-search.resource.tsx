export async function patientSearch(searchString: string){
    const url = `http://localhost:3000/api/patients?q=${searchString}`;
    const patient = await fetch(url);
    return patient;
}