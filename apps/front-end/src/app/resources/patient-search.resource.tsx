export async function patientSearch(searchString: string){
    const url = `http://localhost:3000/api/patients/search?identifier=${searchString}`;
    const response = await fetch(url);
    return response.json();
}