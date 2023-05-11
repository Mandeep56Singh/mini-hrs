import React from "react";
import { Patient } from "../../models/patient";
import { Descriptions } from 'antd';

const PatientInfo: React.FC<{patient: Patient}> = ({patient})=> {
    return(
        <Descriptions title="Patient Info">
        <Descriptions.Item label="First Name">{patient?.patientNames[0]?.firstName}</Descriptions.Item>
        <Descriptions.Item label="Last Name">{patient?.patientNames[0]?.lastName}</Descriptions.Item>
        <Descriptions.Item label="Identifier">{patient?.patientIdentifiers[0].identifier}</Descriptions.Item>
        <Descriptions.Item label="DOB">{patient?.dob}</Descriptions.Item>
        <Descriptions.Item label="Gender">{patient?.gender}</Descriptions.Item>
      </Descriptions>
    );
    
};

export default PatientInfo;