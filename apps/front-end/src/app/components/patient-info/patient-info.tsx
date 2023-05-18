import React,{ useState, useEffect } from "react";
import { Patient } from "../../models/patient";
import { Descriptions } from 'antd';
import { useLoaderData } from "react-router-dom";
import { getPatient } from '../../resources/patient.resource';

const PatientInfo: React.FC = ()=> {
  const data: { uuid: string } = useLoaderData();
  const [currentPatient, setCurrentPatient] = useState<Patient>();
  useEffect(() => {
    getPatient(data.uuid).then((patient: Patient) => {
      setCurrentPatient(patient);
    });
  }, [data]);
    return(
        <Descriptions title="Patient Info">
        <Descriptions.Item label="First Name">{currentPatient?.patientNames[0]?.firstName}</Descriptions.Item>
        <Descriptions.Item label="Last Name">{currentPatient?.patientNames[0]?.lastName}</Descriptions.Item>
        <Descriptions.Item label="Identifier">{currentPatient?.patientIdentifiers[0].identifier}</Descriptions.Item>
        <Descriptions.Item label="DOB">{currentPatient?.dob}</Descriptions.Item>
        <Descriptions.Item label="Gender">{currentPatient?.gender}</Descriptions.Item>
      </Descriptions>
    );
    
};

export default PatientInfo;