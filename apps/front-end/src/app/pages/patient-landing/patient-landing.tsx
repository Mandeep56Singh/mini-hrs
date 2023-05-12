import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Patient } from '../../models/patient';
import { getPatient } from '../../resources/patient.resource';
import PatientInfo from '../../components/patient-info/patient-info';
import ProgramEnrollment from '../program-enrollment/program-enrollment';
import { Row, Col } from 'antd';

const PatientLanding: React.FC = () => {
  const data: { uuid: string } = useLoaderData();
  const [currentPatient, setCurrentPatient] = useState<Patient>();
  const [patientLoaded, setPatientLoaded] = useState<boolean>(false);

  useEffect(() => {
    getCurrentPatient(data.uuid).then((patient: Patient) => {
      setCurrentPatient(patient);
      setPatientLoaded(true);
    });
  }, [data]);
  const getCurrentPatient = async (patientUuid: string): Promise<Patient> => {
    const patient: Patient = await getPatient(patientUuid);
    return patient;
  };
  return (
    <>
      <Row>
        <Col>{patientLoaded && <PatientInfo patient={currentPatient} />}</Col>
      </Row>
      <Row>
        <Col>
          {patientLoaded && <ProgramEnrollment patient={currentPatient} />}
        </Col>
      </Row>
    </>
  );
};

export default PatientLanding;
