import React,{ useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Patient } from "../../models/patient";
import { getPatient } from "../../resources/patient.resource";

const PatientLanding: React.FC = ()=>{
    const data = useLoaderData();
    const [currentPatient,setCurrentPatient]= useState<Patient>();

    useEffect(()=> {
        const patient = getCurrentPatient(data.uuid);
        setCurrentPatient(patient);
    },[data]);
    const getCurrentPatient = async (patientUuid: string)=>{
           const patient = await getPatient(patientUuid);
           return patient;
    };
    console.log('data', data);
    return(
        <p>Patient Landing</p>
    );
}

export default PatientLanding;